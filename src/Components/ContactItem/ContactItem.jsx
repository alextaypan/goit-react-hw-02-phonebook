import PropTypes from "prop-types";
import s from "./ContactItem.module.css";

export const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li key={id} className={s.item}>
      <p>
        {name}: {number}
      </p>
      <button type="button" className={s.button} onClick={() => onClick(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
