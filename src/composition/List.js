import React from 'react';
import Card from './Card.js';

class List extends React.Component {
  render() {
    const arrayOfCards = this.props.cards.map((ele, i) => {
      return <Card key={i} title={ele.title} content={ele.content}></Card>
    })

    return(
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          {arrayOfCards}
        </div>
      </section>
    );
  }
}

export default List;