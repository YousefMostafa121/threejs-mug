import { useState } from "react";
import bottomArrow from "./assets/bottomArrow.png";
const CupOrderForm = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [fontColor, setFontColor] = useState("#000000");
  const [cupColor, setCupColor] = useState("#c4a18a");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderSubmit = () => {
    // When the button is clicked, open the modal
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Close the modal when the close button is clicked
    setIsModalOpen(false);
  };

  return (
    <div className="">
      {/* Text/Image Placement Dropdown */}
      <div className="relative mb-4">
        <label className="block text-right mb-2">مكان النص / الصورة</label>
        <select className="w-full border border-gray-300 rounded-[6px] px-2 h-[56px] appearance-none text-[14px] text-[#8D8F90]">
          <option>اختر المكان</option>
          <option value="top">أعلى</option>
          <option value="center">في المنتصف</option>
          <option value="bottom">أسفل</option>
        </select>

        {/* Custom Dropdown Icon */}
        <div className="absolute top-[55%] left-3 transform  pointer-events-none">
          <img src={bottomArrow} alt="Dropdown Icon" />
        </div>
      </div>

      {/* Image Upload */}
      <div className="mb-4 relative">
        <label className="block text-right mb-2">الصورة المراد طباعتها</label>
        <div className=" relative flex items-center justify-between w-full border border-gray-300 rounded-[6px]  appearance-none h-[56px] ">
          <p className=" px-2 text-[14px] text-[#8D8F90]">
            {image ? (
              <span className=" bg-[#F2F4F8] py-1 px-3 rounded-full text-black  flex items-center gap-3">
                {image.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className=" cursor-pointer relative z-40"
                  onClick={() => setImage(null)}
                >
                  <path
                    d="M12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12ZM7.793 7.793C7.98053 7.60553 8.23484 7.50021 8.5 7.50021C8.76516 7.50021 9.01947 7.60553 9.207 7.793L12 10.586L14.793 7.793C14.8852 7.69749 14.9956 7.62131 15.1176 7.5689C15.2396 7.51649 15.3708 7.4889 15.5036 7.48775C15.6364 7.4866 15.7681 7.5119 15.891 7.56218C16.0139 7.61246 16.1255 7.68671 16.2194 7.7806C16.3133 7.8745 16.3875 7.98615 16.4378 8.10905C16.4881 8.23194 16.5134 8.36362 16.5123 8.4964C16.5111 8.62918 16.4835 8.7604 16.4311 8.8824C16.3787 9.00441 16.3025 9.11475 16.207 9.207L13.414 12L16.207 14.793C16.3892 14.9816 16.49 15.2342 16.4877 15.4964C16.4854 15.7586 16.3802 16.0094 16.1948 16.1948C16.0094 16.3802 15.7586 16.4854 15.4964 16.4877C15.2342 16.49 14.9816 16.3892 14.793 16.207L12 13.414L9.207 16.207C9.0184 16.3892 8.7658 16.49 8.5036 16.4877C8.2414 16.4854 7.99059 16.3802 7.80518 16.1948C7.61977 16.0094 7.5146 15.7586 7.51233 15.4964C7.51005 15.2342 7.61084 14.9816 7.793 14.793L10.586 12L7.793 9.207C7.60553 9.01947 7.50021 8.76516 7.50021 8.5C7.50021 8.23484 7.60553 7.98053 7.793 7.793Z"
                    fill="#8D8F90"
                  />
                </svg>
              </span>
            ) : (
              "قم بتحميل صورتك المميزة هنا"
            )}
          </p>
          <div className=" bg-[#8D8F90] rounded-l-[6px] h-full px-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M36.4399 41.5H11.5599C10.8663 41.4717 10.1851 41.3069 9.5553 41.0151C8.92548 40.7233 8.35938 40.3101 7.8894 39.7993C7.41942 39.2884 7.05479 38.6899 6.81636 38.038C6.57793 37.3861 6.47039 36.6935 6.49989 36V30C6.49989 29.6022 6.65792 29.2207 6.93923 28.9394C7.22053 28.6581 7.60206 28.5 7.99989 28.5C8.39771 28.5 8.77924 28.6581 9.06055 28.9394C9.34185 29.2207 9.49989 29.6022 9.49989 30V36C9.44825 36.5939 9.62717 37.1848 9.99955 37.6503C10.3719 38.1158 10.9092 38.42 11.4999 38.5H36.4399C37.0306 38.42 37.5678 38.1158 37.9402 37.6503C38.3126 37.1848 38.4915 36.5939 38.4399 36V30C38.4399 29.6022 38.5979 29.2207 38.8792 28.9394C39.1605 28.6581 39.5421 28.5 39.9399 28.5C40.3377 28.5 40.7192 28.6581 41.0005 28.9394C41.2818 29.2207 41.4399 29.6022 41.4399 30V36C41.4998 37.3908 41.008 38.7489 40.0717 39.7789C39.1353 40.8089 37.83 41.4275 36.4399 41.5ZM31.9999 17.5C31.8028 17.501 31.6075 17.4625 31.4255 17.387C31.2435 17.3114 31.0784 17.2002 30.9399 17.06L23.9999 10.12L17.0599 17.06C16.7755 17.325 16.3994 17.4692 16.0108 17.4624C15.6222 17.4555 15.2515 17.2981 14.9766 17.0233C14.7018 16.7484 14.5444 16.3777 14.5375 15.9891C14.5307 15.6005 14.6749 15.2244 14.9399 14.94L22.9399 6.94002C23.2211 6.65912 23.6024 6.50134 23.9999 6.50134C24.3974 6.50134 24.7786 6.65912 25.0599 6.94002L33.0599 14.94C33.3408 15.2213 33.4986 15.6025 33.4986 16C33.4986 16.3975 33.3408 16.7788 33.0599 17.06C32.9214 17.2002 32.7563 17.3114 32.5743 17.387C32.3922 17.4625 32.197 17.501 31.9999 17.5Z"
                fill="#F2F4F8"
              />
              <path
                d="M24 31.5C23.6038 31.4948 23.2253 31.3351 22.9451 31.0549C22.6649 30.7747 22.5052 30.3962 22.5 30V8C22.5 7.60218 22.658 7.22064 22.9393 6.93934C23.2206 6.65804 23.6022 6.5 24 6.5C24.3978 6.5 24.7794 6.65804 25.0607 6.93934C25.342 7.22064 25.5 7.60218 25.5 8V30C25.4948 30.3962 25.3351 30.7747 25.0549 31.0549C24.7747 31.3351 24.3962 31.4948 24 31.5Z"
                fill="#F2F4F8"
              />
            </svg>
          </div>
          <input
            type="file"
            className="block w-full border border-gray-300 rounded-[6px] p-2 absolute opacity-0"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <p className="text-sm text-gray-500 text-right mt-2">
          يفضل ان تكون حجم الصورة 350px{" "}
        </p>
      </div>

      {/* Name/Message Input */}
      <div className="mb-4">
        <label className="block text-right mb-2">
          الاسم / العبارة المراد طباعتها
        </label>
        <input
          type="text"
          placeholder="اكتب هنا"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border border-gray-300 rounded-[6px] p-2 h-[56px]"
        />
      </div>
      <div className=" flex items-center justify-between gap-5">
        {/* Cup Color Picker */}
        <div className="flex flex-col gap-2 items-center">
          <label className="text-right">لون الكوب</label>
          <input
            type="color"
            value={cupColor}
            onChange={(e) => setCupColor(e.target.value)}
            className="ml-4 w-[70px] h-[56px] rounded-[6px] outline-none border-none"
          />
        </div>

        {/* Font Color Picker */}
        <div className="mb-4 flex justify-between">
          <div className="flex flex-col gap-2 items-center">
            <label className="text-right">لون الخط</label>
            <input
              type="color"
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
              className="ml-4 w-[70px] h-[56px] rounded-[6px] outline-none border-none"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        className="w-full bg-[#1E1F50] text-white py-2 rounded-[6px] h-[56px] text-[18px] xl:text-[20px] 2xl:text-[24px]"
        onClick={handleOrderSubmit}
      >
        طلب الكوب
      </button>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6  max-w-[535px]">
            <p className="text-[28px] xl:text-[30px] 2xl:text-[32px] text-black font-[700] text-center mb-10">
              قم بإدخال بياناتك لإستكمال الطلب
            </p>
            <div className="mb-4">
              <label className="block text-right mb-2">الاسم</label>
              <input
                type="text"
                placeholder={"ادخل الاسم"}
                className="w-full border border-gray-300 rounded-[6px] p-2 h-[56px]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-right mb-2">الايمل</label>
              <input
                type="text"
                placeholder="ادخل الايميل"
                className="w-full border border-gray-300 rounded-[6px] p-2 h-[56px]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-right mb-2">رقم الهاتف</label>
              <input
                type="text"
                placeholder="ادخل الرقم"
                className="w-full border border-gray-300 rounded-[6px] p-2 h-[56px]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-right mb-2">ملحوظة</label>
              <textarea
                type="text"
                placeholder="اكتب هنا"
                className="w-full border border-gray-300 rounded-[6px] p-2 min-h-[5rem]"
              />
            </div>
            <button
              className="w-full bg-[#1E1F50] text-white py-2 rounded-[6px] h-[56px] text-[18px] xl:text-[20px] 2xl:text-[24px]"
              onClick={handleCloseModal} // Close modal
            >
              إرسال
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CupOrderForm;
