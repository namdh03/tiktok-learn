import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classnames = cx('menu-item', { separate: data.separate });

    return (
        <Button leftIcon={data.icon} className={classnames} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
