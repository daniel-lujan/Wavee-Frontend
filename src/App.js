import "./App.css";
import Navbar from "./components/Navbar";
import SongsList from "./components/SongsList";
import Main from "./pages/Main";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Main />
      <SongsList />
    </QueryClientProvider>
  );
}

export default App;
