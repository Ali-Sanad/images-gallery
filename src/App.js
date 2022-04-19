import useImageList from './hooks/useImageList';
import styles from './App.module.css';
import Spinner from './components/loading-spinner/Spinner';

function App() {
  const {imageList, isLoading} = useImageList();

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <h1 className={styles.title}>Image Gallery</h1>
      <div className={styles.imageList}>
        {imageList?.map((image) => (
          <img
            loading='lazy'
            key={image?.uuid}
            src={image?.url}
            alt={image?.name ?? 'image'}
            className={styles.image}
          />
        ))}
      </div>
    </>
  );
}

export default App;
