import PropTypes from "prop-types";

export default function Bill({ billValue, setBillValue }) {
  return (
    <form>
      <label htmlFor="value">Enter you bill value?</label>
      <input
        id="value"
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
      />
    </form>
  );
}

Bill.propTypes = {
  billValue: PropTypes.any.isRequired,
  setBillValue: PropTypes.func.isRequired,
};
