const ImageComponent = ({
  src,
  alt,
  classes,
  content
}: {
  src: string;
  alt: string;
  classes: string;
  content?: any;
}) => {
  return (
    <div
      data-testid={alt}
      className={`${classes} 
                  bg-contain 
                  bg-center 
                  hover:bg-auto`}
      style={{ backgroundImage: `url(${src})` }}
    >
      {content}
    </div>
  );
};

export default ImageComponent;
