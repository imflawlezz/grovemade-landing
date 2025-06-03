import ProductCard from "@/app/components/common/ProductCard";
import Carousel from "@/app/components/common/Carousel";

export const Featured = () => {
    return (
        <section className="flex flex-col items-center text-center px-4 py-8 sm:py-10 mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl mt-4 sm:mt-6">Featured Products</h2>
            <p className="text-sm mt-3 max-w-xl text-[var(--paragraph)] px-2">
                See What&#39;s Trending Right Now
            </p>
            <div className="w-full overflow-hidden">
                <Carousel>
                    <ProductCard
                        href="/products/desk-pad"
                        title="Walnut Magsafe Stand"
                        price="$120"
                        imageSrc="/walnut-magsafe-stand.png" />
                    <ProductCard
                        href="/products/desk-pad"
                        title="Walnut Laptop Riser"
                        price="$150"
                        imageSrc="/walnut-laptop-riser.png" />
                    <ProductCard
                        href="/products/desk-pad"
                        title="Walnut iPad Stand"
                        price="$120"
                        imageSrc="/walnut-ipad-stand.png" />
                    <ProductCard
                        href="/products/desk-pad"
                        title="Walnut Monitor Stand"
                        price="$100"
                        imageSrc="/walnut-monitor-stand.png" />
                    {/* --------- */}
                    <ProductCard
                        href="/products/desk-pad"
                        title="Walnut Magsafe Stand"
                        price="$120"
                        imageSrc="/walnut-magsafe-stand.png" />
                    <ProductCard
                        href="/products/desk-pad"
                        title="Walnut Laptop Riser"
                        price="$150"
                        imageSrc="/walnut-laptop-riser.png" />
                    <ProductCard
                        href="/products/desk-pad"
                        title="Walnut iPad Stand"
                        price="$120"
                        imageSrc="/walnut-ipad-stand.png" />
                    <ProductCard
                        href="/products/desk-pad"
                        title="Walnut Monitor Stand"
                        price="$100"
                        imageSrc="/walnut-monitor-stand.png" />
                    {/* --------- */}
                    <ProductCard
                        href="/products/desk-pad"
                        title="Walnut Magsafe Stand"
                        price="$120"
                        imageSrc="/walnut-magsafe-stand.png" />
                    <ProductCard
                        href="/products/desk-pad"
                        title="Walnut Laptop Riser"
                        price="$150"
                        imageSrc="/walnut-laptop-riser.png" />
                    <ProductCard
                        href="/products/desk-pad"
                        title="Walnut iPad Stand"
                        price="$120"
                        imageSrc="/walnut-ipad-stand.png" />
                    <ProductCard
                        href="/products/desk-pad"
                        title="Walnut Monitor Stand"
                        price="$100"
                        imageSrc="/walnut-monitor-stand.png" />
                </Carousel>
            </div>
        </section>
    )
}