import { useState } from 'react';

import Search from '../Search/Search';
import Trending from '../Trending/Trending';
import Recommended from '../Recommended/Recommended';

export default function Landing() {
  let [searchTerm, setSearchTerm] = useState("");

  function onSearchTermChange(term) {
    setSearchTerm(term);
  }

  return (
    <>
      <Search setSearchTerm={onSearchTermChange} />
      <Trending />
      <Recommended searchTerm={searchTerm} />
    </>
  );
}
