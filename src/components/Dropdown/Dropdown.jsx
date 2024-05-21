import SearchIcon from "../../assets/SearchIcon.png";
import "./Dropdown.css"

const Dropdown = ({ options, selectedValue, onChange, placeholder }) => (
  <div className="input-container">
    <img srcSet="" src={SearchIcon} alt="Search icon" />
    <select value={selectedValue} onChange={onChange} >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown