import './Burger.css';

const Burger = ({ isMenuOpen, handleToggleMenu }) => {
  return (
    <button className={`burger ${isMenuOpen && 'burger_active'}`}
      onClick={handleToggleMenu}>
      <span className="burger_span"></span>
      <span className="burger_span"></span>
      <span className="burger_span"></span>
    </button>
  )
}

export default Burger