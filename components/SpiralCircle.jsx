import clsx from "clsx";

const SpiralCircle = ({ position, mainColor, dimColor }) => {
  return (
    <div className={clsx("absolute", position)}>
      <div
        className="w-[300px] h-[300px] rounded-full relative flex items-center justify-center"
        style={{ backgroundColor: `${mainColor}80` }} // 50% opacity for mainColor
      >
        <div
          className="absolute w-[90%] h-[90%] rounded-full flex items-center justify-center"
          style={{ backgroundColor: dimColor }}
        >
          <div
            className="absolute w-[80%] h-[80%] rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${mainColor}80` }} // 50% opacity for mainColor
          >
            <div
              className="absolute w-[86%] h-[86%] rounded-full flex items-center justify-center"
              style={{ backgroundColor: dimColor }}
            >
              <div
                className="absolute w-[70%] h-[70%] rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${mainColor}80` }} // 50% opacity for mainColor
              >
                <div
                  className="absolute w-[80%] h-[80%] rounded-full"
                  style={{ backgroundColor: dimColor }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiralCircle;
