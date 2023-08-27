import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { VerifyIcon } from '../Icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1956&q=80"
                alt="Dương Hoàng Nam"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Dương Hoàng Nam</span>
                    <VerifyIcon width="1.4rem" height="1.4rem" className={cx('check')}></VerifyIcon>
                </h4>
                <span className={cx('username')}>namdh03</span>
            </div>
        </div>
    );
}

export default AccountItem;
