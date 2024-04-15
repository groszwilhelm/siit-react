import "./App.css";
import Navigation from "./components/Navigation";
import Search from "./components/Search/Search";
import Trending from "./components/Trending/Trending";
import Recommended from "./components/Recommended/Recommended";
import { useState } from 'react';

function App() {
  let [searchTerm, setSearchTerm] = useState('');

  function onSearchTermChange(term) {    
    setSearchTerm(term);
  }

  return (
    <main>
      <Navigation />
      <Search setSearchTerm={onSearchTermChange} />
      <Trending />
      <Recommended searchTerm={searchTerm} />
    </main>
  );
}

export default App;
