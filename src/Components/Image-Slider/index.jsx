import { useEffect, useState } from "react";
import "../Image-Slider/styles.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit }) {
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
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
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

  return (
    <div className="sliderComponent">
      <BsArrowLeftCircleFill className="arrow-left" />
      {images && images.length
        ? images.map((image) => {
            return (
              <div className="img_cont" key={image.id}>
                <img src={image.download_url} alt={image.download_url} />
              </div>
            );
          })
        : null}
      <BsArrowRightCircleFill className="arrow-right" />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button key={index} className="current-indicator"></button>
              );
            })
          : null}
      </span>
    </div>
  );
}
