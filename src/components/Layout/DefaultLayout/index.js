import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <>
            <Header></Header>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="content">{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;
