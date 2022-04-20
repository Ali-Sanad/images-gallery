import useCarousel from '../hooks/useCarousel';
import styles from '../styles/Carousel.module.css';
const Carousel = ({
  imageList,
  isOpen,
  setIsOpen,
  activeIndex,
  setActiveIndex,
  activeImage,
  setActiveImage,
}) => {
  const {goToPrevSlide, goToNextSlide} = useCarousel(
    imageList,
    isOpen,
    setIsOpen,
    activeIndex,
    setActiveIndex,
    setActiveImage
  );

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
        Image {activeIndex + 1} / {imageList?.length}
      </div>
    </div>
  );
};

export default Carousel;
