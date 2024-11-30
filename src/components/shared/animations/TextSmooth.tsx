import { FC, ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TextSmoothProps {
    color?: string;
    duration?: number;
    container: string;
    children: ReactNode;
    delay?: number;
}

const TextSmooth: FC<TextSmoothProps> = ({
    children,
    container,
    duration = 0.2,
    delay,
    color,
}): JSX.Element => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const letters = ref.current?.querySelectorAll(".letters-text-smooth");

        if (letters && letters.length > 0) {
            const anim = gsap.to(letters, {
                color: color,
                duration: duration,
                stagger: 0.08,
                paused: true,
                delay: delay,
            });

            ScrollTrigger.create({
                trigger: ref.current,
                start: "top 80%",
                onEnter: () => anim.play(),
            });

            return () => {
                anim.kill();
                ScrollTrigger.getById(container)?.kill();
            };
        }
    }, [container, color, duration]);

    return <div ref={ref}>{children}</div>;
};

export default TextSmooth;