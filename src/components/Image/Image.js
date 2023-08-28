import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import images from '~/assets/img';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleErrorImage = () => {
        setFallback(customFallback);
    };

    // eslint-disable-next-line jsx-a11y/alt-text
    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            className={classNames(styles.wrapper, className)}
            onError={handleErrorImage}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
