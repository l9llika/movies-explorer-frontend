export const paths = {
  main: '/',
  movies: '/movies',
  savedMovies: '/saved-movies',
  profile: '/profile',
  signUp: '/signup',
  signIn: '/signin',
}

export const messages = {
  loginError: 'Неправильно указан email или пароль',
  editUserInfoError: 'При изминении профиля произошла ошибка',
  successMessage: 'Данные успешно обновлены',
  emailError: 'Пользователь с таким email уже существует',
  registerError: 'При регистрации пользователя произошла ошибка',
  cardLikeError: 'Фильм не удалось добавить в сохраненные',
  cardDeleteError: 'Не удалось удалить фильм из сохраненных',
  loadMoviesError: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
}

// export const MAIN_URL = 'http://localhost:3000';
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const MAIN_URL = 'https://movies-l9lika.nomoredomains.monster/api';
