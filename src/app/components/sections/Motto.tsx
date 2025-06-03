import Logo from "@/app/components/common/Logo";

export const Motto = () => {
    return (
        <section className="px-4 sm:px-6 md:px-12 py-6">
            <div className="flex flex-col items-center text-center text-white py-16 sm:py-20 md:py-24 bg-[var(--utility)]">
                <Logo
                    variant="icon"
                    className="w-6 sm:w-8"
                />
                <h2 className="text-2xl sm:text-3xl mt-4 sm:mt-6">Design Inspires</h2>
                <p className="mt-4 sm:mt-6 max-w-xl text-xs px-4">
                    Build your dream workspace, so you can get your best work done
                </p>
            </div>
        </section>
    )
}