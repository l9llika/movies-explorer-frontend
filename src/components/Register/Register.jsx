import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../Logo/Logo";
import Greeting from "../Greeting/Greeting";
// import Input from "../Input/Input";
// import { useState, useEffect } from "react";
// import { messages, emailRegExp } from "../../utils/config";
import { useEffect } from "react";
import { useValidationForm } from "../../utils/hooks/useValidationForm";

const Register = (props) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [name, setName] = useState('');
  // const [emailDirty, setEmailDirty] = useState(false);
  // const [passwordDirty, setPasswordDirty] = useState(false);
  // const [nameDirty, setNameDirty] = useState(false);
  // const [emailError, setEmailError] = useState(messages.emailInputError);
  // const [passwordError, setPasswordError] = useState(messages.passwordInputError);
  // const [nameError, setNameError] = useState(messages.nameInputError);
  // const [formValid, setFormValid] = useState(false);
  const {values, errors, isValid, handleChange } = useValidationForm();

  useEffect(() => {
    props.resetResponseErrors();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    props.resetResponseErrors();
    if (props.signUp) {
      props.signUp(values);
    } else {
      props.signIn(values.name,values.email, values.password);
    }
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
          value={values.name}
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
          value={values.email}
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
          value={values.password}
          onChange={handleChange}
        />
        <span className="register__form_error">{errors.password || ''}</span>
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
      </form>
    </div>
  )
}

export default Register
