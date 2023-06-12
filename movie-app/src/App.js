import './App.css';

const App = () => {
  const search = (q) => {
    console.log(q);
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Zahen Wafera</h1>
       <div className="movie-search">
        <input 
          type="text" 
          placeholder="Cari Film Kesayanganmu"
          onChange={ (target) => search(target.value)}
          />
       </div>
       <div className="movie-container">
        <div className="movie-wrapper">
          <div className="movie-title"></div>
          <img className="movie-img" src="" />
          <div className="movie-date">12-06-2022</div>
          <div className="movie-rate">9.2</div>
        </div>
       </div>
      </header>
    </div>
  )
};

export default App;
