import { useEffect, useState } from "react";
import "../Image-Slider/styles.css";

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
      {images ? (
        images.map((image) => {
          return (
            <div className="img_cont" key={image.id}>
              <img src={image.download_url} />
            </div>
          );
        })
      ) : (
        <h2>No data Found</h2>
      )}
    </div>
  );
}
