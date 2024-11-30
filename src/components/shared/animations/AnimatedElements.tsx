import { FC, ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedElementProps extends React.HTMLAttributes<HTMLDivElement> {
    from: {
        opacity?: number;
        x?: number;
        y?: number;
        rotate?: number;
        scale?: number;
    };
    to: {
        opacity?: number;
        x?: number;
        y?: number;
        rotate?: number;
        scale?: number;
    };
    delay?: number;
    duration?: number;
    useScrollTrigger?: boolean;
    children: ReactNode;
}

const AnimatedElement: FC<AnimatedElementProps> = ({
    children,
    from,
    to,
    delay = 0,
    duration = 0.4,
    useScrollTrigger = true,
    ...props
}): JSX.Element => {
    const ref = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (ref.current) {
            if (!animationRef.current) {
                const animation = gsap.fromTo(
                    ref.current,
                    { ...from, delay, duration, ease: "power1.out" },
                    {
                        ...to,
                        delay,
                        duration,
                        ease: "power1.out",
                    }
                );

                if (useScrollTrigger) {
                    ScrollTrigger.create({
                        trigger: ref.current,
                        start: "top 82%",
                        end: "bottom 25%",
                        toggleActions: "play none none none",
                        animation: animation,
                    });
                }

                animationRef.current = animation;
            }
        }
    }, [from, to, duration, delay, useScrollTrigger]);

    return (
        <div ref={ref} className="animated" {...props}>
            {children}
        </div>
    );
};

export default AnimatedElement;
