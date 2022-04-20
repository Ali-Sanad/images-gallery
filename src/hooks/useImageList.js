import {useEffect, useState} from 'react';
import {API_URL} from '../utils/constants';

const useImageList = () => {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(imageList[activeIndex]);

  const [isOpen, setIsOpen] = useState(false);
  const fetchImages = async () => {
    setIsLoading(true);
    const response = await fetch(API_URL);
    const data = await response.json();
    setImageList(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchImages();
  }, []);

  return {
    imageList,
    isLoading,
    activeIndex,
    setActiveIndex,
    setIsOpen,
    isOpen,
    activeImage,
    setActiveImage,
  };
};

export default useImageList;
