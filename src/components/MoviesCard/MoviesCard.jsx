import './MoviesCard.css';

const MoviesCard = ({ movie, isLiked, savedMovies }) => {
  return (
    <article className="movie">
      <div className="movie__container">
        <div className="movie__description">
          <p className="movie__title">{movie.nameRU}</p>
          <p className="movie__duration">{movie.duration}</p>
        </div>
        <button
          className={`movie__button
          ${isLiked ? 'movie__button_liked' : ''}
          ${savedMovies ? 'movie__button_saved' : ''}`}
          type="button">
        </button>
      </div>
      <img
        className="movie__image"
        src={movie.image}
        alt="Постер" />
    </article>
  )
}

export default MoviesCard