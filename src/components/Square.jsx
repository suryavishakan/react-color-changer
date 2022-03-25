import PropTypes from "prop-types";

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#fff" : "#000",
      }}
    >
      <p>{colorValue ? colorValue : "Empty value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

// type checking
Square.defaultProps = {
  colorValue: "Empty color value",
};
Square.propTypes = {
  colorValue: PropTypes.string.isRequired,
};

export default Square;
