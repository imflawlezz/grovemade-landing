import Image from "next/image";
import React from "react";

export const House = () => {
    return (
        <section className="flex flex-col items-center text-center px-4 pt-8 sm:pt-10">
            <h2 className="text-2xl sm:text-3xl mt-8 sm:mt-16 font-medium">Made The Hard Way</h2>
            <p className="mt-4 sm:mt-6 max-w-3xl text-[var(--paragraph)] px-2">
                Our signature craftsmanship has been honed over a decade of manufacturing innovation here in
                Portland, Oregon. We combine the skills of our small in-house team with the collective strength of
                collaborators throughout the US to deliver quality products worth investing in.
            </p>
            <div className="w-full max-w-7xl mt-6 sm:mt-8 px-2 sm:px-8 md:px-16 lg:px-40">
                <Image
                    width={1200}
                    height={700}
                    src="/our-home.png"
                    alt="Our Home"
                    className="w-full h-auto"
                />
            </div>
        </section>
    )
}