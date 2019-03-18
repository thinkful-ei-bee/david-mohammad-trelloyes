import React from 'react';
import './App.css';
import Card from './composition/Card.js';
import './composition/Card.css';
import List from './composition/List.js';
import './composition/List.css';
import STORE from './store';

function createSingleList(cardIds) {
  return cardIds.map(singleId =>
    STORE.allCards[singleId]);
}

function App(props) {
  const store = props.store;
  

  const jsxLists = STORE.lists.map(ele => 
  {return <List cards={createSingleList(ele.cardIds)}></List>});

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
    <div className="App-list">
      {jsxLists}
    </div>
    </main>
  );
}

export default App;



