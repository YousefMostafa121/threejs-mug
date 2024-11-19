import CupOrderForm from "./CupOrderForm";
import ThreeJSExample from "./ThreeJSExample";
import { useState } from "react";

const ShowForm = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [color_value, setColorValue] = useState("#fff");
  return (
    <div className=" grid grid-cols-1 xl:grid-cols-2 gap-10 overflow-hidden">
      <CupOrderForm
        uploadedImage={uploadedImage}
        setUploaedImage={setUploadedImage}
        color_value={color_value}
        setColorValue={setColorValue}
      />
      <ThreeJSExample
        uploadedImagee={uploadedImage}
        color_value={color_value}
      />
    </div>
  );
};

export default ShowForm;
