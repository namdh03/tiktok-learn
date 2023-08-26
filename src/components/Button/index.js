import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    primary,
    outline,
    rounded,
    text,
    small,
    large,
    disabled,
    className,
    leftIcon,
    rightIcon,
    href,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    let props = {
        onClick,
        ...passProps,
    };
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        small,
        large,
        rounded,
        disabled,
    });

    // Remove event listener
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
