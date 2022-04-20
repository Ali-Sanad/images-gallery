import {useEffect} from 'react';
import styles from './Carousel.module.css';
const Carousel = ({
  imageList,
  isOpen,
  setIsOpen,
  activeIndex,
  setActiveIndex,
  activeImage,
  setActiveImage,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  useEffect(() => {
    setActiveImage(imageList[activeIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && e.target.id === 'myModal') {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToPrevSlide = () => {
    if (activeIndex === 0) {
      setActiveIndex(imageList?.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (activeIndex === imageList?.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div id='myModal' className={styles.modal}>
      <div className={styles.modalContent}>
        <img
          className={styles.modalImage}
          id='activeCarouselImage'
          src={activeImage?.url}
          alt='activeCarouselImage'
        />
        <div className={styles.imageName}>{activeImage?.name}</div>
        {/* action btns */}
        <div>
          <i
            className={`fa-solid fa-chevron-left fa-2xl ${styles.prev}`}
            onClick={() => goToPrevSlide()}
          ></i>
          <i
            className={`fa-solid fa-chevron-right fa-2xl ${styles.next}`}
            onClick={() => goToNextSlide()}
          ></i>
        </div>
      </div>
      <div className={styles.numbertext}>
        Image {activeIndex + 1} / {imageList.length}
      </div>
    </div>
  );
};

export default Carousel;
