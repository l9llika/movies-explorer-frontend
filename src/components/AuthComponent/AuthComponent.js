import { Navigate } from "react-router-dom";

const AuthComponent = (props) => {
  return (
    props.isLoggedIn ? props.component : <Navigate to={props.pathToRedirect} />
  )
}

export default AuthComponent
