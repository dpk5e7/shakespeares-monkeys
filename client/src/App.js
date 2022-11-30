import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

// import components
import Navbar from "./components/Navbar";

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
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/teamMember" element={<TeamMember />} />
            <Route path="/editTeamMember/:id" element={<EditTeamMember />} />
            <Route path="/export" element={<Export />} />
            <Route path="/userManagement" element={<UserManagement />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
