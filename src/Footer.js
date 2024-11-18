const Footer = () => {
  return (
    <footer className=" bg-[#1E1F50] py-10 ">
      <div className="container">
        <p className="text-[28px] xl:text-[30px] 2xl:text-[32px] text-white mb-8 ">
          حول مؤسسة الملك سلمان غير الربحية
        </p>
        <p className=" text-[18px] xl:text-[20px] 2xl:text-[24px] text-white mb-12">
          أعلنت المملكة العربية السعودية عن إطلاق مؤسسة الملك سلمان غير الربحية،
          وهي مؤسسة تهدف إلى تعزيز دور القطاع غير الربحي في المملكة ودعم الجهود
          التنموية والاجتماعية، تماشيًا مع أهداف .رؤية 2030. يأتي إطلاق هذه
          المؤسسة كخطوة هامة نحو تمكين العمل الخيري والمجتمعي وتعزيز الابتكار
          والريادة في هذا المجال.
        </p>
      </div>
      <span className=" w-full h-[2px] bg-[#E2ECFA] block mb-8"></span>
      <div className=" container flex items-center justify-between gap-5">
        <p className=" text-[12px] md:text-[14px] xl:text-[16px] text-white">
          جميع الحقوق محفوظة لدي TecnoBlocks.com© موضوع 2024
        </p>
        <div className=" w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M10.619 7.69913L16.9486 0.5H15.4492L9.95085 6.74963L5.56259 0.5H0.5L7.13736 9.95145L0.5 17.4999H1.9994L7.80206 10.8987L12.4374 17.4999H17.5M2.54056 1.60634V2.49994L11.5 15.4999L13.144 16.4479"
              fill="#1E1F50"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
