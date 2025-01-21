import React from "react";
import SpiralCircle from "../SpiralCircle";

const Stats = () => {
  return (
    <section className="myContainer">
      <div className="relative stat text-white bg-primary w-full overflow-hidden h-[400px] md:h-[300px] rounded-tr-2xl rounded-bl-2xl rounded-tl-[67px] md:rounded-tl-[82px] rounded-br-[70px] md:rounded-br-[95px]">
        <SpiralCircle
          dimColor="#023BC6"
          mainColor="#3562d1"
          position="-bottom-[170px] -left-[170px]"
        />
        <SpiralCircle
          dimColor="#023BC6"
          mainColor="#3562d1"
          position="-top-[170px] -right-[170px]"
        />
        <div className="relative z-10 h-full myFlex max-md:flex-col justify-around">
          <div>
            <h1>100K</h1>
            <p>Satisfied Customers</p>
          </div>
          <div>
            <h1>100K</h1>
            <p>Satisfied Customers</p>
          </div>
          <div>
            <h1>100K</h1>
            <p>Satisfied Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
