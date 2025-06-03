import React from "react";
import {TeamMemberCard} from "@/app/components/common/TeamMemberCard";

const mockData = [
    { name: "Emma Johnson", position: "Project Manager", imageUrl: "/t1.png" },
    { name: "Liam Smith", position: "Frontend Developer", imageUrl: "t2.png" },
    { name: "Olivia Brown", position: "UX Designer", imageUrl: "t3.png" },
    { name: "Noah Davis", position: "Backend Developer", imageUrl: "t4.png" },
    { name: "Ava Wilson", position: "Marketing Specialist", imageUrl: "t5.png" },
    { name: "William Moore", position: "Product Owner", imageUrl: "t6.png" },
    { name: "Sophia Taylor", position: "QA Engineer", imageUrl: "t7.png" },
    { name: "James Anderson", position: "DevOps Engineer", imageUrl: "t8.png" },
    { name: "Isabella Thomas", position: "Content Strategist", imageUrl: "t9.png" },
    { name: "Benjamin Jackson", position: "Full Stack Developer", imageUrl: "t10.png" },
    { name: "Mia White", position: "HR Manager", imageUrl: "t11.png" },
    { name: "Lucas Harris", position: "Mobile Developer", imageUrl: "t12.png" },
    { name: "Charlotte Martin", position: "SEO Specialist", imageUrl: "t13.png" },
    { name: "Henry Thompson", position: "Data Analyst", imageUrl: "t14.png" },
    { name: "Amelia Garcia", position: "Social Media Manager", imageUrl: "t15.png" },
    { name: "Alexander Martinez", position: "System Architect", imageUrl: "t16.png" },
    { name: "Harper Robinson", position: "Customer Success Manager", imageUrl: "t17.png" },
    { name: "Michael Clark", position: "Cloud Engineer", imageUrl: "t18.png" },
    { name: "Evelyn Rodriguez", position: "Business Analyst", imageUrl: "t19.png" },
    { name: "Elijah Lewis", position: "IT Support Specialist", imageUrl: "t20.png" },
    { name: "Abigail Lee", position: "Finance Manager", imageUrl: "t21.png" },
    { name: "Daniel Walker", position: "AI Researcher", imageUrl: "t22.png" },
    { name: "Emily Hall", position: "Legal Advisor", imageUrl: "t23.png" },
    { name: "Matthew Allen", position: "Graphic Designer", imageUrl: "t24.png" },
];

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
