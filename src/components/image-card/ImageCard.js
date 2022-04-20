import styles from './ImageCard.module.css';

const ImageCard = ({image, index, setActiveIndex, setIsOpen}) => {
  return (
    <div className={styles.imageContainer}>
      <i
        className={`fa-solid fa-magnifying-glass fa-2xl ${styles.imageIcon}`}
        onClick={() => {
          setActiveIndex(index);
          setIsOpen(true);
        }}
      ></i>

      <img
        className={styles.image}
        id={index}
        loading='lazy'
        src={image?.url}
        alt={image?.name ?? 'image'}
      />
    </div>
  );
};

export default ImageCard;
