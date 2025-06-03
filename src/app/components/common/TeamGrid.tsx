import React from "react";
import {TeamMemberCard} from "@/app/components/common/TeamMemberCard";

const mockData = [
        { name: "Jack Miller", position: "Workshop Manager", imageUrl: "t1.png" },
        { name: "Emily Johnson", position: "Product Photographer", imageUrl: "t2.png" },
        { name: "Grace Collins", position: "Packaging Specialist", imageUrl: "t3.png" },
        { name: "Ethan Brooks", position: "Woodcraft Technician", imageUrl: "t4.png" },
        { name: "Chloe Adams", position: "Online Store Assistant", imageUrl: "t5.png" },
        { name: "Ryan Cooper", position: "Operations Coordinator", imageUrl: "t6.png" },
        { name: "Lily Bennett", position: "Customer Support", imageUrl: "t7.png" },
        { name: "Nathan Parker", position: "CNC Machine Operator", imageUrl: "t8.png" },
        { name: "Brian Reed", position: "Wood Finishing Specialist", imageUrl: "t9.png" },
        { name: "Jacob Murphy", position: "Product Designer", imageUrl: "t10.png" },
        { name: "Tyler Ward", position: "Shipping Coordinator", imageUrl: "t11.png" },
        { name: "Avery Mitchell", position: "Instagram Marketing", imageUrl: "t12.png" },
        { name: "Logan Hayes", position: "Brand Identity Designer", imageUrl: "t13.png" },
        { name: "Ella Peterson", position: "Workshop Assistant", imageUrl: "t14.png" },
        { name: "Dylan Foster", position: "Material Procurement", imageUrl: "t15.png" },
        { name: "Zoe Simmons", position: "Email Marketing Specialist", imageUrl: "t16.png" },
        { name: "Scarlett James", position: "Community Manager", imageUrl: "t17.png" },
        { name: "Caleb Price", position: "Quality Inspector", imageUrl: "t18.png" },
        { name: "Victoria Russell", position: "PR & Collaborations", imageUrl: "t19.png" },
        { name: "Madison Griffin", position: "Blog Writer", imageUrl: "t20.png" },
        { name: "Brandon Hughes", position: "CAD Modeler", imageUrl: "t21.png" },
        { name: "Owen Butler", position: "Laser Engraving Specialist", imageUrl: "t22.png" },
        { name: "Jason Bailey", position: "Supply Chain Assistant", imageUrl: "t23.png" },
        { name: "Isla Sanders", position: "Social Media Content Creator", imageUrl: "t24.png" }
    ]
;

const TeamGrid: React.FC = () => {
    return (
        <div className="p-10 mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
                {mockData.map((member, index) => (
                    <TeamMemberCard
                        key={index}
                        name={member.name}
                        position={member.position}
                        imageUrl={member.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default TeamGrid;
