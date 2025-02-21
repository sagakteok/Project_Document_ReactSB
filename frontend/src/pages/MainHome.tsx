import { useMediaQuery } from "react-responsive";
import MainHomeDesktop from "./MainHome/MainHomeDesktop";
import MainHomeMobile from "./MainHome/MainHomeMobile";

function MainHome() {
    const isMobile = useMediaQuery({query: "(max-width: 700px)"});

    return isMobile ? <MainHomeMobile /> : <MainHomeDesktop />
}

export default MainHome;