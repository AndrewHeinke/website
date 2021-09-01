const Image = ({ src, width, height, alt, restOfProps }) => {
  return (
    <img src={src} alt={alt} {...restOfProps} width={width} height={height} />
  );
};

Image.defaultProps = {
  width: "100%",
  height: "auto",
};

export default Image;
