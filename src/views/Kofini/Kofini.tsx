import SectionFirst from "./../../assets/kofini_sec_1.jpg";

export default function Kofini() {
  return (
    <>
      <div
        className="absolute lg:w-full lg:h-full xl:w-full xl:h-full md:w-full md:h-auto sm:w-full sm:h-auto bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${SectionFirst})`,
          opacity: 0.7,
        }}
      ></div>
      <div className="flex items-center justify-center font-sans z-30">
        <h1 className="text-sm md:text-lg lg:text-5x1 xl:text-5xl text-gray-700 tracking-widest font-semibold animate-fade-up">
          KOFINI HONEY
        </h1>
      </div>
      <div className="flex items-center justify-center font-sans  bg-transparent p-40"></div>
    </>
  );
}
