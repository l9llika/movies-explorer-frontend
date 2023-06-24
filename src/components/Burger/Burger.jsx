import './Burger.css';

const Burger = ({ isMenuOpen, handleToggleMenu }) => {
  return (
    <button className={`burger ${isMenuOpen && 'burger_active'}`}
      onClick={handleToggleMenu}>
      <span className="burger-span"></span>
      <span className="burger-span"></span>
      <span className="burger-span"></span>
    </button>
  )
}

export default Burger