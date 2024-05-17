import { useState, useEffect } from "react";

// Import photos
import autumn from "../../imgs/Home/autumn.jpg";
import coffee from "../../imgs/Home/coffee.jpg";
import diaries from "../../imgs/Home/diaries.jpg";
import laptop from "../../imgs/Home/laptop.jpg";
import life from "../../imgs/Home/life.jpg";
import mags from "../../imgs/Home/mags.jpg";
import mailbox from "../../imgs/Home/mailbox.jpg";
import notebook from "../../imgs/Home/notebook.jpg";

function AlternateImage({ imageUrls, currentImage }) {
  const imageSrc = imageUrls[currentImage % imageUrls.length];
  return (
    <img
      src={imageSrc}
      alt="Alternating Photos"
      className="object-cover h-dvh w-full"
    />
  );
}
const Hero = () => {
  const [imageUrls, setImageUrls] = useState([
    autumn,
    coffee,
    diaries,
    laptop,
    life,
    mags,
    mailbox,
    notebook,
  ]);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevCurrentImage) =>
        prevCurrentImage === imageUrls.length - 1 ? 0 : prevCurrentImage + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [imageUrls]);

  return (
    <div>
      <AlternateImage imageUrls={imageUrls} currentImage={currentImage} />
    </div>
  );
};

export default Hero;
