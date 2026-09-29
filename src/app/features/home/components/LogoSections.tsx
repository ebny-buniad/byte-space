import React from 'react';
import Image from 'next/image';

export default function LogoSections() {
    const logos = [
        { id: 1, src: '/images/logo/logo-1.png', alt: 'Logo 1' },
        { id: 2, src: '/images/logo/logo-2.png', alt: 'Logo 2' },
        { id: 3, src: '/images/logo/logo-3.png', alt: 'Logo 3' },
        { id: 4, src: '/images/logo/logo-4.png', alt: 'Logo 4' },
        { id: 5, src: '/images/logo/logo-5.png', alt: 'Logo 5' },
    ];

    return (
        <section className=" bg-gray-100">

            <div className="max-w-330 mx-auto lg:h-50">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-center justify-items-center w-full h-full">
                    {logos.map((logo) => (
                        <div
                            key={logo.id}
                            className="relative w-full h-12 sm:h-16 lg:h-20 max-w-35 flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill
                                sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 160px"
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}