import { useEffect, useState } from 'react';

const LayoutComponent = () => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    const checkScreenSize = () => {
        setOnSmallScreen(window.innerHeight < 768);
    }

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, [])

    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>
        </div>
    );
};

export default LayoutComponent;