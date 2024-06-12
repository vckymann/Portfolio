import PropTypes from "prop-types";

const Img = ({ className, src = "defaultNoData.png", alt = "testImg", ...restProps }) => {
    return <img className={className} src={src} alt={alt} {...restProps} />;
  };

export default Img;

Img.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
};
  