import styles from '../styles/ImageCard.module.css';

const ImageCard = ({
  image,
  index,
  setActiveIndex,
  setActiveImage,
  setIsOpen,
}) => {
  return (
    <div
      className={styles.imageContainer}
      onClick={() => {
        setActiveIndex(index);
        setActiveImage(image);
        setIsOpen(true);
      }}
    >
      <i
        className={`fa-solid fa-magnifying-glass fa-2xl ${styles.imageIcon}`}
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
