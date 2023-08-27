import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { VerifyIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image src="" alt="Dương Hoàng Nam" className={cx('avatar')} />
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
