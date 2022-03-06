import Search from '../features/Search';
import Display from '../features/Display';

const Main = () => {
  return (
    <div className="App">
      <section className="search">
        <Search />
      </section>
      <section className="creature-display">
        <Display /> 
      </section>
      <section className="creature-tools">Modify here!</section>
    </div>
  );
}

export default Main;