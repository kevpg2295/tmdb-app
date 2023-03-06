import "./App.css";
import img from "./assets/attack-titan-final-season-4-poster.jpg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="wrapper header__wrapper ">
          <div>
            <img className="header__logo" src="" alt="" />
            <h1 className="header__title">POPCORN</h1>
          </div>

          <nav className="navbar">
            <a href="" className="navbar__item">
              Home
            </a>
            <a href="" className="navbar__item">
              Popular Movies
            </a>
            <a href="" className="navbar__item">
              Top Rated
            </a>
            <a href="" className="navbar__item">
              Upcoming
            </a>
          </nav>
        </div>
      </header>

      <form action="" className="form">
        <label htmlFor="search-bar" className="form__label">
          Search bar
        </label>
        <input type="submit" id="search-bar" className="form__input" />
        <button className="form__button">Search</button>
      </form>

      <section className="movie-row">
        <h2 className="section__title">My Favorites</h2>
      </section>

      <section className="movie-row">
        <h2 className="movie-row__title">My Movies</h2>
        <ul className="movie-row__list">
          <li className="movie-row__list-item">
            <img src={img} alt="" />
          </li>
          <li className="movie-row__list-item">
            <img src={img} alt="" />
          </li>
          <li className="movie-row__list-item">
            <img src={img} alt="" />
          </li>
          <li className="movie-row__list-item">
            <img src={img} alt="" />
          </li>
          <li className="movie-row__list-item">
            <img src={img} alt="" />
          </li>
          <li className="movie-row__list-item">
            <img src={img} alt="" />
          </li>
        </ul>
      </section>

      <section className="movie-row">
        <h2 className="movie-row__title">Top rated</h2>
        <ul className="movie-row__list">
          <li className="movie-row__list-item">
            <img src={img} alt="" />
          </li>
          <li className="movie-row__list-item">
            <img src={img} alt="" />
          </li>
          <li className="movie-row__list-item">
            <img src={img} alt="" />
          </li>
          <li className="movie-row__list-item">
            <img src={img} alt="" />
          </li>
          <li className="movie-row__list-item">
            <img src={img} alt="" />
          </li>
          <li className="movie-row__list-item">
            <img src={img} alt="" />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
