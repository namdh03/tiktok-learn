import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import images from '~/assets/img';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    CoinIcon,
    FeedbackHelpIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MoreIcon,
    ProfileIcon,
    SettingIcon,
    UploadIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Layout/components/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon></LanguageIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FeedbackHelpIcon></FeedbackHelpIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon></KeyboardIcon>,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (item) => {
        switch (item.type) {
            case 'language': {
                console.log(item);
                break;
            }

            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <ProfileIcon></ProfileIcon>,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <CoinIcon></CoinIcon>,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <SettingIcon></SettingIcon>,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon></LogoutIcon>,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />

                <Search></Search>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-button')}>
                                    <UploadIcon width="3.2rem" height="3.2rem"></UploadIcon>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                // fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                src=""
                                alt="Dương Hoàng Nam"
                                className={cx('user-avatar')}
                            />
                        ) : (
                            <button className={cx('more-button')}>
                                <MoreIcon></MoreIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
