import { useEffect, useState } from 'react';

const UseWindowWidth = (screenSize) => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setOnSmallScreen(window.innerHeight < screenSize);
        }

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, [screenSize]);

    return onSmallScreen;
}

export default UseWindowWidth;
