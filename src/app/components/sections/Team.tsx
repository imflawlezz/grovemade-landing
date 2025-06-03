import TeamGrid from "@/app/components/common/TeamGrid";
import Button from "@/app/components/ui/Button";

export const Team = () => {
    return (
        <section className="flex flex-col items-center text-center px-4 py-8 sm:py-10">
            <h2 className="text-2xl sm:text-3xl">Make Work Meaningful</h2>
            <p className="mt-4 sm:mt-6 max-w-xl text-[var(--paragraph)] px-2">
                We&#39;re here because we believe that your work deserves the best. A team that loves working together
                is the magic that makes it all happen.
            </p>
            <div className="w-full">
                <TeamGrid />
            </div>

            <h2 className="text-2xl sm:text-3xl mt-10 sm:mt-14 font-medium">We Hope You&#39;ll Join Us</h2>
            <Button className="mt-6 sm:mt-8 mb-8 sm:mb-12">READ MORE ABOUT OUR STORY</Button>
        </section>
    )
}