"use client"

import { FC, ReactNode } from "react";

type SignupLayoutProps = {
    children: ReactNode;
}

const SignupLayout: FC<SignupLayoutProps> = ({ children }): JSX.Element => {
    return (
        <section className="signup w-full overflow-hidden flex items-center justify-center min-h-screen">
            <img src="/icons/signup-shape-1.svg" alt="shape-top" className="fixed top-0 left-0 w-[80px] md:w-[100px] lg:w-[160px] z-10" />
            {children}
            <img src="/icons/signup-shape-2.svg" alt="shape-bottom" className=" fixed bottom-0 right-0 w-[90px] md:w-[190px] lg:w-[330px]" />
        </section>
    );
};

export default SignupLayout;