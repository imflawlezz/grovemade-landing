import CategoryCard from "@/app/components/common/CatgoryCard";
import Button from "@/app/components/ui/Button";

export const GetStarted = () => {
    return (
        <section className="flex flex-col items-center text-center px-4 py-8 sm:py-10">
            <h2 className="text-2xl sm:text-3xl mt-4 sm:mt-6">Design Inspires</h2>
            <p className="mt-4 sm:mt-6 max-w-xl text-[var(--paragraph)] px-2">
                Build your dream workspace, so you can get your best work done
            </p>
            <Button className="mt-4 sm:mt-6">GET STARTED</Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-7xl mt-8 sm:mt-10 px-2 sm:px-0">
                <CategoryCard
                    title="Desk Pads"
                    imageSrc="/desk-pads.png"
                    buttonText="LEARN MORE"
                    buttonColor="black"
                />
                <CategoryCard
                    title="Laptop Stands"
                    imageSrc="/laptop-stands.png"
                    buttonText="LEARN MORE"
                    buttonColor="black"
                />
            </div>
        </section>

    )
}