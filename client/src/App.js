import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// printing Export code
import ReactToPrint from "react-to-print";
import { useRef } from "react";


// import apollo graphql
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// import pages
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";
import EditTeamMember from "./pages/EditTeamMember";
import Export from "./pages/Export";
import UserManagement from "./pages/UserManagement";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// MOCK IMPORT TO TEST SINGLE TEAM MEMBER ///////////////////
import ExportSingleMember from "./pages/ExportSingleMember"

// import components
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import RequireAdmin from "./components/RequireAdmin";

// import Global State User Context
import { UserProvider } from "./utils/UserContext";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App () {
  // for prininting
  const componentRef = useRef();

  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <UserProvider>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route
                path="/team"
                element={
                  <RequireAuth>
                    <Team />
                  </RequireAuth>
                }
              />
              <Route
                path="/teamMember"
                element={
                  <RequireAuth>
                    <TeamMember />
                  </RequireAuth>
                }
              />
              <Route
                path="/editTeamMember/:id"
                element={
                  <RequireAuth>
                    <EditTeamMember />
                  </RequireAuth>
                }
              />
              <Route
                path="/export"
                element={
                  <RequireAuth>
                    <ReactToPrint
                    // trigger={() => <button>Print</button>}
                    trigger={() => {
                      return <button>Print</button>;
                    }}
                    content={() => this.componentRef}
                    />
                    <Export ref={el => (this.componentRef = el)} />
                  </RequireAuth>
                }
              />

              {/* mock route for testing */}
              <Route
                path="/oneTeamMember/:id"
                element={
                  <RequireAuth>
                    <ExportSingleMember />
                  </RequireAuth>
                }
                />

              <Route
                path="/userManagement"
                element={
                  <RequireAdmin>
                    <UserManagement />
                  </RequireAdmin>
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="*"
                element={<h1 className="display-2">Wrong page!</h1>}
              />
            </Routes>
          </UserProvider>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
