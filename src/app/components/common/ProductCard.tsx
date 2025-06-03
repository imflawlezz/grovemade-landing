import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
    href: string;
    title: string;
    price: string;
    imageSrc: string;
};

const ProductCard = ({ href, title, price, imageSrc }: ProductCardProps) => {
    return (
        <Link href={href} className="flex flex-col text-left hover:opacity-90 transition-opacity mx-2 sm:mx-4 md:mx-6 lg:mx-8">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 480px) 85vw, (max-width: 640px) 45vw, (max-width: 768px) 35vw, (max-width: 1024px) 28vw, 25vw"
                />
            </div>
            <div className="px-1 sm:px-0">
                <h3 className="mt-3 sm:mt-4 text-sm font-light text-[var(--paragraph)] leading-snug">{title}</h3>
                <p className="mt-1 text-sm text-[var(--paragraph)] font-medium">{price}</p>
            </div>
        </Link>
    );
};

export default ProductCard;