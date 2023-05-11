import { useRef } from "react";
import "./App.css";
import { ModalContext } from "./components/ModalContext";
import Navbar from "./components/Navbar";
import SongsList from "./components/SongsList";
import Main from "./pages/Main";
import { QueryClient, QueryClientProvider } from "react-query";
import Results from "./components/Results";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const modalRef = useRef();

  const modalMethods = {
    show: (data) => {
      console.log("showing modal");
      modalRef.current.show(data);
    },
    hide: () => modalRef.current.hide(),
  };

  return (
    <ModalContext.Provider value={modalMethods}>
      <QueryClientProvider client={queryClient}>
        <Results ref={modalRef} />
        <Navbar />
        <Main />
        <SongsList />
      </QueryClientProvider>
    </ModalContext.Provider>
  );
}

export default App;
