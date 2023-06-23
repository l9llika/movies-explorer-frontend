import "./SearchForm.css";
import searchIcon from "../../images/search.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useValidationForm } from "../../utils/hooks/useValidationForm";
import { useEffect,useState } from "react";
import { useRef } from "react";

const SearchForm = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const { values, isValid, handleChange } = useValidationForm();
  const inputRef = useRef();

  useEffect(() => setIsChecked(props.isCheckedInitial),
    [props.isCheckedInitial]
  )

  useEffect(() => { inputRef.current.dispatchEvent(new Event('change', { bubbles: true })) },
    [props.searchStringInitial]
  )

  function handleSubmit(e) {
    e.preventDefault();
      props.onLoad(values.movie, isChecked);
    }

  return (
    <form className="search" onSubmit={(e) => handleSubmit(e)} >
      <fieldset className="search-form">
      <img src={searchIcon} alt="Поиск" className="search-icon" />
        <input
          className="search-form__input"
          type="text"
          placeholder={props.placeholder}
          name="movie"
          minLength="2"
          required
          defaultValue={props.searchStringInitial || ''}
          onChange={handleChange}
          ref={inputRef}
        />
        <span className="search-form__error">{isValid || "Нужно ввести ключевое слово"}</span>
        <span className={`search-form__response-error`}>{props.responseMessage.error}</span>
        <button
          className="search__button"
          type="submit"
          disabled={!isValid}
        >
        </button>
        <hr className="search__divider"/>
        <FilterCheckbox
          label="Короткометражки"
          setIsChecked={setIsChecked}
          isChecked={isChecked}
        />
      </fieldset>
      <hr className="search__divider-horizontal"/>
    </form>
  )
}

export default SearchForm
