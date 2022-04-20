//components
import Spinner from '../components/Spinner';
import ImageCard from '../components/ImageCard';
import Carousel from '../components/Carousel';
//hooks
import useImageList from '../hooks/useImageList';
//styles
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
  const {
    imageList,
    isLoading,
    activeIndex,
    setActiveIndex,
    setIsOpen,
    isOpen,
    activeImage,
    setActiveImage,
  } = useImageList();
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <h1 className={styles.title}>Image Gallery</h1>
      <div className={styles.imageList}>
        {imageList?.map((image, idx) => (
          <ImageCard
            key={image?.uuid}
            image={image}
            index={idx}
            setActiveIndex={setActiveIndex}
            setActiveImage={setActiveImage}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>

      {isOpen && (
        <Carousel
          imageList={imageList}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
      )}
    </>
  );
};

export default Gallery;
