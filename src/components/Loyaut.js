import { Outlet } from "react-router-dom";
import { Navigation } from './navigation/Navigation';
import { FooterCargo } from './footerCargo/FooterCargo';

export const Loyaut = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>
        
            <main>
                <Outlet />
            </main>
            
            <footer>
                <FooterCargo />
            </footer>    
        </>
    )
}