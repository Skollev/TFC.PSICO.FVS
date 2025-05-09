import { useEffect, useRef, useState, RefObject } from 'react';

export default function useVisible<T extends HTMLElement>(
    threshold: number = 0.1
): [RefObject<T | null>, boolean] {
    const ref = useRef<T | null>(null);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        const current = ref.current;
        if (current) {
            observer.observe(current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return [ref, visible];
}
