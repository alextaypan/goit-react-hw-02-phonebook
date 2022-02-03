import PropTypes from "prop-types";
import s from "./Filter.module.css";

export function Filter({ filter, onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        className={s.input}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
