import React from "react";
import SpiralCircle from "../SpiralCircle";

const Stats = () => {
  return (
    <section className="md:myContainer pt-14 md:!py-20 max-md:bg-gradient-to-b from-bgGray to-white">
      <div className="relative stat text-white bg-primary w-full overflow-hidden h-[450px] md:h-[300px] rounded-tl-[55px] rounded-br-[55px] md:rounded-tr-2xl md:rounded-bl-2xl md:rounded-tl-[82px] md:rounded-br-[95px]">
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
        <div className="relative z-10 h-full myFlex max-md:flex-col justify-evenly">
          <div className="myFlex flex-col justify-center">
            <h1>100K</h1>
            <p>Satisfied Customers</p>
          </div>
          <div className="myFlex flex-col justify-center">
            <h1>100K</h1>
            <p>Satisfied Customers</p>
          </div>
          <div className="myFlex flex-col justify-center">
            <h1>100K</h1>
            <p>Satisfied Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
