const ImageComponent = ({
  src,
  alt,
  classes,
}: {
  src: string;
  alt: string;
  classes: string;
}) => {
  return (
    <div
      data-testid={alt}
      className={`${classes} 
                  bg-contain 
                  bg-center 
                  hover:bg-auto`}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
};

export default ImageComponent;
