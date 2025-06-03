import Button from "@/app/components/ui/Button";

export const Hero = () => {
    return (
        <section className="bg-cover bg-center bg-no-repeat h-[400px] sm:h-[450px] md:h-[500px] flex flex-col items-center justify-center text-white px-4"
                 style={{ backgroundImage: "url('/hero.png')" }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-center">The Desk Shelf System</h1>
            <p className="mt-3 text-sm sm:text-base text-center">Available in Walnut or Maple</p>
            <Button className="mt-5">LEARN MORE</Button>
        </section>
    )
}