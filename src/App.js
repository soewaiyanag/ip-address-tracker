import { useSelector } from "react-redux";
import Header from "./components/Header";
import LoadingOverlay from "./components/LoadingOverlay";
import Map from "./components/Map";

function App() {
  const status = useSelector((state) => state.status);
  return (
    <>
      {status === "pending" ? <LoadingOverlay /> : null}
      <Header />
      <Map />
    </>
  );
}

export default App;
