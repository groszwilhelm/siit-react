import "./App.css";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Trending from "./components/Trending";
import Recommended from "./components/Recommended";

function App() {
  return (
    <main>
      <Navigation />
      <Search />
      <Trending />
      <Recommended />
    </main>
  );
}

export default App;
