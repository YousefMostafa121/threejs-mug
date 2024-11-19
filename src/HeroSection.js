import heroImage from "./assets/heroImage.png";

const HeroSection = () => {
  return (
    <section className=" relative z-30    min-h-[750px]  bg-[url('./assets/shapes.png')] bg-no-repeat bg-cover bg-center bg-[#1E1F50] flex items-center ">
      <div className=" container grid grid-cols-1 md:grid-cols-2 gap-5 h-full">
        <div>
          <img src={heroImage} alt="heroImage" />
        </div>
        <div className=" flex flex-col gap-10 items-center justify-center">
          <h1 className="text-[32px] xl:text-[40px] 2xl:text-[50px] text-white text-center max-w-[662px]">
            طباعة احترافية على الأكواب لأفكارك المميزة! صمم أكوابك وسنوصلها لك
            بجودة عالية.
          </h1>
          <button className="text-[18px] xl:text-[20px] 2xl:text-[24px] text-[#1E1F50] bg-white rounded-[6px] py-2 px-5">
            اطبع تصميمك
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
