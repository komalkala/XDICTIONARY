import React, { useState } from 'react';

const XDictionary = () => {
  const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const dictionaryLookup = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const foundWord = initialDictionary.find(
      (entry) => entry.word.toLowerCase() === searchTermLowerCase
    );

    if (foundWord) {
      setSearchResult(foundWord.meaning);
    } else {
      setSearchResult('Word not found in the dictionary.');
    }
  };

  return (
    <div>
      <h1>XDictionary</h1>
      <input
        type="text"
        placeholder="Enter a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={dictionaryLookup}>Search</button>
      {searchResult && <p>{searchResult}</p>}
    </div>
  );
};

export default XDictionary;

