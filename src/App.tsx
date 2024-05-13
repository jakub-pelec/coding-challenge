import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import UserList from "./components/UserList/UserList";
import UserDetails from "./components/UserDetails/UserDetails";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user-details/:userId" element={<UserDetails />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export default App;
