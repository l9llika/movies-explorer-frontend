import "./MoreButton.css";

const MoreButton = ({ handleClick }) => {
  return (
    <button className="more-button" onClick={handleClick}>
      Ещё
    </button>
  )
}

export default MoreButton
