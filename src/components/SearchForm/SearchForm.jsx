import "./SearchForm.css";
import searchIcon from "../../images/search.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useValidationForm } from "../../utils/hooks/useValidationForm";
import { useState } from "react";

const SearchForm = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const { values, isValid, handleChange } = useValidationForm();

  function handleSubmit(e) {
    e.preventDefault();
      props.onLoad(values.movie, isChecked);
    }

  return (
    <form className="search" onSubmit={(e) => handleSubmit(e)} noValidate>
      <fieldset className="search-form">
      <img src={searchIcon} alt="Поиск" className="search-icon" />
        <input
          className="search-form__input"
          type="text"
          placeholder={props.placeholder}
          name="movie"
          minLength="2"
          required
          value={values.movie || ''}
          onChange={handleChange}
        />
        <button
          className="search__button"
          type="submit"
          disabled={!isValid}
        >
        </button>
        <span className="search-form__error">{isValid || "Нужно ввести ключевое слово"}</span>
        <hr className="search__divider"/>
        <FilterCheckbox
          label="Короткометражки"
          onChange={setIsChecked}
        />
      </fieldset>
      <hr className="search__divider-horizontal"/>
    </form>
  )
}

export default SearchForm
