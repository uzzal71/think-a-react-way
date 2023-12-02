import { useEffect, useState } from 'react';

const LayoutComponentTwo = () => {
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
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h1>This is another component</h1>
        </div>
    );
};

export default LayoutComponentTwo;