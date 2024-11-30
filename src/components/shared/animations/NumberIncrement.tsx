"use client";

import { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type NumberIncrementProps = {
    start: number;
    end: number;
    duration: number;
    delay?: number;
};

const NumberIncrement: FC<NumberIncrementProps> = ({ start, end, duration, delay }): JSX.Element => {
    const numberRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (numberRef.current) {
            const animation = gsap.fromTo(
                numberRef.current,
                { innerText: start },
                {
                    innerText: end,
                    duration,
                    roundProps: "innerText",
                    ease: "power1.inOut",
                    delay,
                    paused: true,
                }
            );

            ScrollTrigger.create({
                trigger: numberRef.current,
                start: "top 80%",
                end: "bottom 20%",
                onEnter: () => animation.play(),
                onEnterBack: () => animation.play(),
                onLeave: () => animation.pause(),
                onLeaveBack: () => animation.pause(),
            });
        }
    }, [start, end, duration, delay]);

    return <span ref={numberRef}>{start}</span>;
};

export default NumberIncrement;
