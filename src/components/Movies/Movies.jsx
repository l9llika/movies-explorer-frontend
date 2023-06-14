import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import { useEffect } from 'react';
import React from 'react';

const Movies = (props) => {
  useEffect(() => props.reset(), [])

  function handleClickMoreButton() {
   props.onRenderMovies(props.filteredSavedCards, props.showedCards, props.countCardsShow.more);
  }

  const moviesCardList = () =>
    <>
      <MoviesCardList
        showedCards={props.showedCards}
        onCardDelete={props.onCardDelete}
        onCardLike={props.onCardLike}
        savedCards={props.savedCards} />
      {props.filteredSavedCards > 0 && props.showedCards > 0 && <MoreButton handleClick={handleClickMoreButton} />}
    </>

  return (
    <section className="movies">
      <SearchForm
        placeholder="Фильм"
        onLoad={props.onLoad}
        isChecked={props.isChecked}
        onCheck={props.onCheck}
      />
      {
        props.isLoading ? <Preloader /> :
          props.showedCards.length > 0 ? moviesCardList() : <span className="movies__span">Ничего не найдено</span>
      }
    </section>
  )
}

export default Movies
