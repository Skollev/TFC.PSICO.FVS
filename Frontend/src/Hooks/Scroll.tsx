import { useEffect, useState } from 'react';

export default function useScroll() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(prev => {
                if (prev !== isScrolled) {
                    return isScrolled;
                }
                return prev;
            });
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return scrolled;
}
