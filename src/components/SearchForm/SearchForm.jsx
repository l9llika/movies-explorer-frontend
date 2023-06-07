import "./SearchForm.css";
import searchIcon from "../../images/search.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";

const SearchForm = ({ placeholder, buttonName }) => {
  const [searchRequest, setSearchRequest] = useState({
    text: '',
    filterShorts: false,
  });

  const handleChangeInput = (e) => {
    setSearchRequest({ ...searchRequest, [e.target.name]: e.target.value });
  }

  const handleChangeCheckbox = (e) => {
    setSearchRequest({ ...searchRequest, [e.target.name]: e.target.checked });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className="search" onSubmit={handleSubmit} noValidate>
      <fieldset className="search-form">
      <img src={searchIcon} alt="Поиск" className="search-icon" />
        <input
          className="search-form__input"
          type="text"
          placeholder={placeholder}
          name="movie"
          minLength="2"
          required
          value={searchRequest.text}
          onChange={handleChangeInput}
        />
        <button
          className="search__button"
          type="submit">
        </button>
        <hr className="search__divider"/>
        <FilterCheckbox
        label="Короткометражки"
        isChecked={searchRequest.filterShorts}
        onCheck={handleChangeCheckbox}
        name="filterShorts"
      />
      </fieldset>
    </form>
  )
}

export default SearchForm