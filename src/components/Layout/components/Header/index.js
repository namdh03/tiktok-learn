import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/img';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    ClearIcon,
    CoinIcon,
    FeedbackHelpIcon,
    KeyboardIcon,
    LanguageIcon,
    LoadingIcon,
    LogoutIcon,
    MoreIcon,
    ProfileIcon,
    SearchIcon,
    SettingIcon,
    UploadIcon,
} from '~/components/Icons';
import Image from '~/components/Image';

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
    const [searchResult, setSearchResult] = useState([]);
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

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

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
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <ClearIcon width="1.6rem" height="1.6rem"></ClearIcon>
                        </button>
                        <LoadingIcon width="1.6rem" height="1.6rem" className={cx('loading')}></LoadingIcon>
                        <button className={cx('search-btn')}>
                            <SearchIcon width="2.4rem" height="2.4rem"></SearchIcon>
                        </button>
                    </div>
                </HeadlessTippy>
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
