import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../Logo/Logo";
import Greeting from "../Greeting/Greeting";
import { useEffect } from "react";
import { useValidationForm } from "../../utils/hooks/useValidationForm";

const Register = (props) => {
  const {values, errors, isValid, handleChange } = useValidationForm();

  useEffect(() => {
    props.reset();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    props.reset();
    props.signUp(values);
  }

  return (
    <div className="register">
      <Logo />
      <Greeting text="Добро пожаловать!" />
      <form className="register__form" onSubmit={handleSubmit} noValidate>
        <label className="register__form_label">
          Имя
        </label>
        <input
          className="register__form_input"
          type="text"
          required
          autoComplete="on"
          name="name"
          minLength="2"
          maxLength="30"
          placeholder="Введите имя"
          id="name"
          pattern="[а-яА-Яёa-zA-Z\s-]{2,30}"
          value={values.name || ''}
          onChange={handleChange}
        />
        <span className="register__form_error">{errors.name || ''}</span>
        <label className="register__form_label">E-mail</label>
        <input
          className="register__form_input"
          type="email"
          required
          autoComplete="on"
          name="email"
          placeholder="Введите email"
          id="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          value={values.email || ''}
          onChange={handleChange}
        />
        <span className="register__form_error">{errors.email || ''}</span>
        <label className="register__form_label">Пароль</label>
        <input
          type="password"
          required={true}
          autoComplete="on"
          name="password"
          minLength="4"
          maxLength="10"
          placeholder="Введите пароль"
          id="password"
          value={values.password || ''}
          onChange={handleChange}
        />
        <span className="register__form_error">{errors.password || ''}</span>
        <div className="register__form_container">
          <span className={`register__form_response-error ${props.responseMessage.message && "register__form_response-message"}`}>
            {props.responseMessage.error}
          </span>
        <button
          className="register__form_button"
          disabled={!isValid}
          type='submit'
        >
          Зарегистрироваться
        </button>
        <p className="register__form_caption">
          Уже зарегистрированы?
          <Link
            className="register__form_link"
            to="/signin"
          >
            Войти
          </Link>
        </p>
        </div>
      </form>
    </div>
  )
}

export default Register
