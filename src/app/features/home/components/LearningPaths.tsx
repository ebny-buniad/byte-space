import React from 'react';
// React Icons Import
import { FaPencilRuler, FaCode, FaLaptop, FaRegBuilding, FaSlideshare, FaCamera } from "react-icons/fa";

const categories = [
    {
        id: 1,
        title: 'Design',
        icon: FaPencilRuler,
    },
    {
        id: 2,
        title: 'Development',
        icon: FaCode,
    },
    {
        id: 3,
        title: 'IT & Software',
        icon: FaLaptop,
    },
    {
        id: 4,
        title: 'Business',
        icon: FaRegBuilding,
    },
    {
        id: 5,
        title: 'Marketing',
        icon: FaSlideshare,
    },
    {
        id: 6,
        title: 'Photography',
        icon: FaCamera,
    },
];

export default function LearningPaths() {
    return (
        <section className="w-full py-10 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-330 mx-auto text-center">

                {/* Header Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                    Explore Diverse Learning Paths at Bytespace
                </h2>

                {/* Subtitle */}
                <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500 max-w-3xl mx-auto font-normal leading-relaxed">
                    At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
                </p>

                {/* Categories Grid */}
                <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 justify-center">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={category.id}
                                className="group flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-3xl h-44 sm:h-48 transition-all duration-300 hover:shadow-lg hover:border-gray-300 cursor-pointer"
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ccff00] flex items-center justify-center text-black mb-4 transition-transform duration-300 group-hover:scale-110">
                                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
                                </div>

                                {/* Title */}
                                <h3 className="text-base sm:text-lg font-medium text-gray-900 text-center">
                                    {category.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}