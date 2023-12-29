import PropTypes from "prop-types";

export default function Friend({ selectF, setSelectF }) {
  return (
    <form>
      <label htmlFor="likeF">
        Tell me how much your friend like the service?
      </label>
      <select
        id="likeF"
        value={Number(selectF)}
        onChange={(e) => setSelectF(e.target.value)}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was Okay(5%)</option>
        <option value="10">It was Okay(10%)</option>
        <option value="20">Absolutely amazing(20%)</option>
      </select>
    </form>
  );
}

Friend.propTypes = {
  selectF: PropTypes.any.isRequired,
  setSelectF: PropTypes.any.isRequired,
};
