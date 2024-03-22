import "./App.css";
import ProgressWidget from "./components/widgets/ProgressWidget";
import ScrollText from "./components/ScrollText";
import Background from "./components/Background";
function App() {
  return (
    <>
      <Background />
      <ScrollText />
      <ProgressWidget />
    </>
  );
}

export default App;
