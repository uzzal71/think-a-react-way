import { useCallback, useEffect, useState } from 'react';

const UseWindowWidth = (screenSize) => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    const checkScreenSize = useCallback(() => {
        setOnSmallScreen(window.innerHeight < screenSize);
    }, []);

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, [checkScreenSize]);

    return onSmallScreen;
}

export default UseWindowWidth;
