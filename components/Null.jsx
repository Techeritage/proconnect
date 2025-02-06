import Image from "next/image";

const Null = () => {
  return (
    <div className="min-h-[300px] myFlex flex-col gap-2 justify-center">
      <Image src="/nodata.svg" width={150} height={180} alt="No Data" />
      <span className="font-semibold">No Data Found</span>
    </div>
  );
};

export default Null;
