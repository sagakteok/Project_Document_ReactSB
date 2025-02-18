import { useMediaQuery } from "react-responsive";
import DesktopHeader from "./Header/HeaderDesktop";
import MobileHeader from "./Header/HeaderMobile";

function Header() {
    const isMobile = useMediaQuery({query: "(max-width: 700px)"});

    return isMobile ? <MobileHeader /> : <DesktopHeader />
}

export default Header;