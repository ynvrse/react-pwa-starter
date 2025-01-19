import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export function Applayout() {
    return (
        <>
            <Header />
            <div className="flex flex-grow flex-col">
                <div className="container flex flex-grow flex-col px-4 md:px-8">
                    <Outlet />
                </div>
            </div>
            <div className="container px-4 md:px-8">
                <Footer />
            </div>
        </>
    );
}
