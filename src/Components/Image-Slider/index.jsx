import { useEffect, useState } from "react";
import "../Image-Slider/styles.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?${page}=1&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="loading">Loading Data !! Please Wait.</div>;
  }

  if (errorMsg !== null) {
    return <div className="error">Error Occured !! {errorMsg}</div>;
  }

  function handlePrev() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="sliderContainer">
      <div className="sliderComponent">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={handlePrev}
        />
        {images && images.length
          ? images.map((image, index) => {
              return (
                <img
                  className={
                    currentSlide === index
                      ? "img_cont"
                      : "img_cont hideImageCont"
                  }
                  key={image.id}
                  src={image.download_url}
                  alt={image.download_url}
                />
              );
            })
          : null}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={handleNext}
        />
      </div>
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator updateCurrInd"
                  }
                  onClick={() => {
                    setCurrentSlide(index);
                  }}></button>
              );
            })
          : null}
      </span>
    </div>
  );
}
