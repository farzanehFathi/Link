import { useState, useEffect } from "react";

// Import photos
import felixgerlach from "../../imgs/Home/felixgerlach.jpg";
import Lierstranda from "../../imgs/Home/Lierstranda.jpg";
import Spritfabriken from "../../imgs/Home/Spritfabriken.jpg";
import TheParkside from "../../imgs/Home/TheParkside.jpg";

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
    felixgerlach,
    Lierstranda,
    Spritfabriken,
    TheParkside,
  ]);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevCurrentImage) =>
        prevCurrentImage === imageUrls.length - 1 ? 0 : prevCurrentImage + 1
      );
    }, 10000);
    return () => clearInterval(intervalId);
  }, [imageUrls]);

  return (
    <div>
      <AlternateImage imageUrls={imageUrls} currentImage={currentImage} />
    </div>
  );
};

export default Hero;
