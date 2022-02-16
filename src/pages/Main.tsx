import React from 'react';

import Container from '../features/search/Container';

const Main = () => {
  return (
    <div className="App">
      <section className="search">
        <Container />
      </section>
      <section className="creature-display">Checkout these stats</section>
      <section className="creature-tools">Modify here!</section>
    </div>
  );
}

export default Main;