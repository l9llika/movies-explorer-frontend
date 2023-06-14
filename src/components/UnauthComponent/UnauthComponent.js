import { Navigate } from "react-router-dom";

const UnauthComponent = (props) => {
  return (
    !props.isLoggedIn ? props.component : <Navigate to={props.pathToRedirect} />
  )
}

export default UnauthComponent
