import React from 'react';
import Image from 'next/image';
import Button from "@/app/components/ui/Button";

type CategoryCardProps = {
    title: string;
    imageSrc: string;
    buttonText?: string;
    onClick?: () => void;
    buttonColor?: 'blue' | 'red' | 'gray' | 'black';
};

const CategoryCard = ({
                          title,
                          imageSrc,
                          buttonText = 'LEARN MORE',
                          onClick,
                          buttonColor = 'black',
                      }: CategoryCardProps) => {
    return (
        <div className="flex flex-col items-center text-center my-4 sm:my-6 md:my-8">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-96">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <h2 className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg font-medium px-2">{title}</h2>
            <div className="mt-2 sm:mt-3">
                <Button color={buttonColor} onClick={onClick}>
                    {buttonText}
                </Button>
            </div>
        </div>
    );
};

export default CategoryCard;