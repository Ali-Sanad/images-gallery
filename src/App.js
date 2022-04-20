import useImageList from './hooks/useImageList';
import styles from './App.module.css';
import Spinner from './components/loading-spinner/Spinner';
import ImageCard from './components/image-card/ImageCard';
import Carousel from './components/carousel/Carousel';

function App() {
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
}

export default App;
