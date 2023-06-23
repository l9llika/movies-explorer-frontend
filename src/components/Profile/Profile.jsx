import "./Profile.css";
import { useValidationForm } from "../../utils/hooks/useValidationForm";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, setValues, setIsValid, handleChange } = useValidationForm();

  useEffect(() => {
    props.reset();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      })
    }
  }, [currentUser, setValues]);

  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsValid(false)
    }
  }, [currentUser, setIsValid, values]);

  function handleSubmit(e) {
    e.preventDefault();
    props.reset();
    props.onEditInfo(values);
  }

  return (
    <form className="form-profile" name="profile-form" onSubmit={handleSubmit}>
      <p className="form-profile__title">Привет, {currentUser.name}!</p>
      <ul className="form-profile__list">
        <li className="form-profile__item">
          <label className="form-profile__label" htmlFor="name">Имя</label>
          <input
            className="form-profile__input"
            type="text"
            id="name"
            name="name"
            pattern="[а-яА-Яёa-zA-Z\s-]{2,30}"
            required
            placeholder="Имя"
            value={values.name || ''}
            onChange={handleChange}
          />
          <span className="form-profile__error" id="input-error">{errors.name || ""}</span>
        </li>
        <li className="form-profile__item">
          <label className="form-profile__label" htmlFor="email">E-mail</label>
          <input
            className="form-profile__input"
            type="email"
            id="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            placeholder="Email"
            value={values.email || ''}
            onChange={handleChange}
          />
          <span className="form-profile__error" id="input-error">{errors.email || ""}</span>
        </li>
      </ul>
      <span className={`form-profile__response-error ${props.responseMessage.message && "form-profile__response-message"}`}>
        {props.responseMessage.error || props.responseMessage.message}
      </span>
      {!isValid ?
        <button type="button"
          className="form-profile__button form-profile__button_view_submit form-profile__button_disabled"
          disabled
        >
          Редактировать
        </button>
        :
        <button type="submit"
          className="form-profile__button form-profile__button_undisabled"
        >
          Сохранить
        </button>
      }
      <button
        type="button"
        className="form-profile__button form-profile__button_view_exit"
        onClick={props.logOut}
      >
        Выйти из аккаунта
      </button>
      </form>
  )
}

export default Profile;
