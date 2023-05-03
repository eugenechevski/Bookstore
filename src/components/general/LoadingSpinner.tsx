import { animated, useSpring } from "react-spring";

const LoadingSpinner = () => {
  const { transform } = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    config: { duration: 1000 },
    reset: true,
    loop: true,
  });

  const jump = useSpring({
    from: { transform: "translateY(0px)" },
    to: { transform: "translateY(-10px)" },
    config: { duration: 1000 },
    reset: true,
    loop: true,
  });

  return (
    <div
      className="flex
                 flex-col
                 items-center
                 justify-center
                 gap-12"
    >
      <animated.div
        style={{ transform }}
        className="border-8
                   border-t-secondary
                   border-primary
                   bg-secondary
                   w-52
                   h-52
                   rounded-[50%]"
      />

      <animated.div
        style={{ ...jump }}
        className="text-3xl
                   text-neutral
                   font-bold"
      >
        Give us a moment...
      </animated.div>
    </div>
  );
};

export default LoadingSpinner;
