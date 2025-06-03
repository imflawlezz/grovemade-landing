import Button from "@/app/components/ui/Button";

export const Inspiration = () => {
    return (
        <section className="bg-cover bg-center bg-no-repeat flex flex-col items-center text-center px-4 py-20 sm:py-32 md:py-40 text-white"
                 style={{ backgroundImage: "url('/inspiration.png')" }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 sm:mt-6 font-medium leading-tight">
                Home Office Inspiration
            </h1>
            <p className="mt-4 sm:mt-6 max-w-xl px-2 text-sm sm:text-base">
                Working from home can be a challenge—see some creative solutions to get it just right.
            </p>
            <Button className="mt-4 sm:mt-6">LEARN MORE</Button>
        </section>
    )
}