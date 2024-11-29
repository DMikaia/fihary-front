"use client"

import Image from "next/image";
import { FC, ReactNode } from "react";

type SignupLayoutProps = {
    children: ReactNode;
}

const SignupLayout: FC<SignupLayoutProps> = ({ children }): JSX.Element => {
    return (
        <section className="signup w-full overflow-hidden flex items-center justify-center min-h-screen">
            <Image src="/icons/signup-shape-1.svg" alt="shape-top" height={200} width={200} className=" fixed top-0 left-0" />
            {children}
            <Image src="/icons/signup-shape-2.svg" alt="shape-bottom" height={400} width={400} className=" fixed bottom-0 right-0" />
        </section>
    );
};

export default SignupLayout;