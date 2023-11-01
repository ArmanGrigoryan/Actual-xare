import { useEffect, useRef } from "react";

export default function useAnimateOnMount() {
    const animateRef = useRef();

    useEffect(() => {
        animateRef.current.animate([
            { opacity: 0 },
            { opacity: 1 },
        ],
        {
            duration: 300,
            iterations: 1,
            fill: "forwards",
        });
    }), [];

    return {
        refElement: animateRef
    }
}