import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import images from '~/assets/img';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
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
}

export default forwardRef(Image);
