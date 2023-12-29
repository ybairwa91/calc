import PropTypes from "prop-types";

export default function Message({ billValue, selectOption, selectF }) {
  let selectOptionNum = Number(selectOption);
  let selectFNum = Number(selectF);
  let billValueNum = Number(billValue);
  let averageIs = (selectOptionNum + selectFNum) / 2;
  
  return (
    <h3>
      You pay {billValueNum + averageIs}$ ({billValueNum}+{averageIs})$
    </h3>
  );
}

Message.propTypes = {
  billValue: PropTypes.any.isRequired,
  selectOption: PropTypes.any.isRequired,
  selectF: PropTypes.any.isRequired,
};
