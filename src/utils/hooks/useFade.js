import { useEffect, useLayoutEffect, useRef } from "react";

export default function useFade(isScrolling = true) {
    const animateRef = useRef();

    // useLayoutEffect(() => {
    //     if (isScrolling) {
    //         window.scrollTo(0, 0);
    //     }
    // }, []);

    useEffect(() => {
        animateRef.current.animate([
            { opacity: 0 },
            { opacity: 1 },
        ],
        {
            duration: 400,
            iterations: 1,
            fill: "forwards",
        });
    }), [];

    return {
        refElement: animateRef
    }
}