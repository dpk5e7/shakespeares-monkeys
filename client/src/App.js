import { BrowserRouter as Router, Routes, Route, renderMatches } from "react-router-dom";

// printing PrintTeam code
import ReactToPrint  from "react-to-print";
import { useRef } from "react"


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
import AddTeamMember from "./pages/AddTeamMember";
import EditTeamMember from "./pages/EditTeamMember";
import UserManagement from "./pages/UserManagement";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrintSingleMember from "./pages/PrintSingleMember";
import PrintExport from "./pages/PrintExport";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import RequireAdmin from "./components/RequireAdmin";


// import Global State User Context
import { UserProvider } from "./utils/UserContext";
import { Container } from "semantic-ui-react";
import PrintTeam from "./pages/PrintTeam";


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

function App() {
// const componentRef = useRef();

  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <UserProvider>
            <Container>
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
                  path="/addTeamMember"
                  element={
                    <RequireAuth>
                      <AddTeamMember />
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
                  path="/printTeam"
                  element={
                    <RequireAuth>
                      {/* <ReactToPrint
                        trigger={() => <button>Print</button>}
                        content={() => componentRef.current}
                      /> */}
                      <PrintTeam />
                    </RequireAuth>
                  }
                />

                <Route
                  path="/printTeamMember/:id"
                  element={
                    <RequireAuth>
                      <PrintSingleMember />
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
                {/* <Route path="/signup" element={<Signup />} /> */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="*"
                  element={<h1 className="display-2">Wrong page!</h1>}
                />
              </Routes>
            </Container>
          </UserProvider>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
