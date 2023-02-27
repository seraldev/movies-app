import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '..';

export const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <Outlet />

            <Footer />
        </>
    )
}
