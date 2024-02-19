import delifood from '../asessts/delifood.png'; // corrected import path
import NavLinkBar from './NavLinkBar';

function Header() {
    return (
        <>
        <div>
            <img src={delifood} alt="Delifood Logo" /> {/* corrected src attribute */}
            <NavLinkBar/>
        </div>
        </>
    );
}

export default Header;
