import { useCallback, useEffect, useRef, useState } from "react";

export default function useScrollTop() {
	const [isVisible, setIsVisible] = useState(false);
    const animateRef = useRef();

	const scrollToTop = useCallback(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, []);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 200 && !isVisible) {
				setIsVisible(true);

                animateRef.current.animate([
                    { opacity: 0 },
                    { opacity: 1 },
                ],
                {
                    duration: 300,
                    iterations: 1,
                    fill: "forwards",
                });
			} 
            else if(window.pageYOffset <= 200 && isVisible) {
                animateRef.current.animate([
                    { opacity: 1 },
                    { opacity: 0 },
                ],
                {
                    duration: 300,
                    iterations: 1,
                    fill: "forwards",
                });

                setTimeout(() => setIsVisible(false), 300);
            }
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, [isVisible]);

    return {
        isVisible,
        animateRef,
        scrollToTop,
    }
}