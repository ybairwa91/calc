import PropTypes from "prop-types";

export default function You({ selectOption, setSelectOption }) {
  return (
    <form>
      <label htmlFor="like">Tell me how much you like the service?</label>
      <select
        value={selectOption}
        onChange={(e) => setSelectOption(e.target.value)}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was Okay(5%)</option>
        <option value={10}>It was Okay(10%)</option>
        <option value={20}>Absolutely amazing(20%)</option>`
      </select>
    </form>
  );
}

You.propTypes = {
  selectOption: PropTypes.any.isRequired,
  setSelectOption: PropTypes.any.isRequired,
};
