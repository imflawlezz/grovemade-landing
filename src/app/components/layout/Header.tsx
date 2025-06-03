'use client';

import Logo from "@/app/components/common/Logo";
import { Nav } from "@/app/components/common/Nav";
import { CartNav } from "@/app/components/common/CartNav";

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white text-sm shadow-sm">
            <div className="px-4 py-4 md:py-6 md:grid grid-cols-3 items-center ">
                <div className="hidden md:block justify-self-start">
                    <Nav />
                </div>

                <div className="justify-self-center">
                    <Logo
                        variant="full"
                        className="w-36 sm:w-44 md:w-52 lg:w-60"
                    />
                </div>

                <div className="hidden md:block justify-self-end">
                    <CartNav />
                </div>
            </div>

            <div className="md:hidden px-4 pb-4  flex justify-self-center">
                <Nav />
                <CartNav />
            </div>
        </header>
    );
};
