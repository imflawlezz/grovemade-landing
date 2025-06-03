import React from "react";

interface TeamMemberCardProps {
    name: string;
    position: string;
    imageUrl: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, position, imageUrl }) => {
    return (
        <div className="relative w-full aspect-[3/4] overflow-hidden group">
            <img
                src={imageUrl}
                alt={`${name} - ${position}`}
                className="w-full h-full object-cover transition duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white text-center px-2">
                <h3 className="text-lg font-semibold drop-shadow-md">{name}</h3>
                <p className="text-sm drop-shadow-sm">{position}</p>
            </div>
        </div>
    );
};