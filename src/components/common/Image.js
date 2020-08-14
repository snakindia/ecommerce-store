import React, { useCallback } from 'react';
import { DEFAULT_IMG_URL } from '../../constants/urls';

const Image = ({ src, ...rest }) => {
  const onImageError = useCallback(event => {
    event.persist();
    event.target.src = DEFAULT_IMG_URL;
  }, []);

  return <img src={src || DEFAULT_IMG_URL} onError={onImageError} {...rest} />;
};

export default Image;
