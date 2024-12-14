'use client'
import React, { useEffect, useRef, useState } from 'react'
interface specific {
    category: string,
    specs?: {
        name: string,
        value: string
    }[]
}

interface propTypes {
    data: {
        order:number,
        heading: string,
        details: specific[]
    }
}
const Scrollspy: React.FC<propTypes> = ({ data }) => {
    console.log(data);

    const [activeSection, setActiveSection] = useState<string>('');

    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    // useEffect for IntersectionObserver, always called unconditionally
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id); // Set active section when visible
                    }
                });
            },
            {
                // root: null, // Use the viewport as the root
                // threshold: 0.6, // 60% of the section should be visible to trigger the observer
            }
        );

        // Observe each section element unconditionally
        data.details.forEach((section) => {
            if (sectionRefs.current[section.category]) {
                observer.observe(sectionRefs.current[section.category]!);
            }
        });

        return () => {
            // Cleanup observer when component unmounts
            data.details.forEach((section) => {
                if (sectionRefs.current[section.category]) {
                    observer.unobserve(sectionRefs.current[section.category]!);
                }
            });
        };
    }, []); // Empty dependency array to ensure this effect runs only once

    // Handle scroll to specific section on click
    const handleScrollToSection = (sectionId: string) => {
        setActiveSection(sectionId); // Set active section on click
        if (sectionRefs.current[sectionId]) {
            sectionRefs.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='border rounded-[16px] bg-white mb-3'>

            <h1 className="text-[23px] text-[#24272c] p-4 font-medium mb-4">{data.heading}</h1>
            <div className="flex border-t-[1px]">
                {/* Sidebar Navigation */}
                <nav className="w-1/4 sticky top-32 bg-white shadow-md h-auto ">
                    <ul className="space-y-2 ">
                        {data.details.map((section) => (
                            <li key={section.category} className=' '>
                                <div
                                    onClick={() => handleScrollToSection(section.category)} // Scroll to section
                                    className={`block px-4 py-2 rounded ml-4 ${activeSection === section.category
                                        ? "bg-black text-white"
                                        : "text-gray-600 cursor-pointer"
                                        }`}
                                >
                                    {section.category}
                                </div>
                                <hr className={activeSection === section.category ? "hidden" : 'flex'} />
                            </li>

                        ))}
                    </ul>
                </nav>

                {/* Content Sections */}
                <div className="w-3/4 p-4 space-y-12 max-h-screen overflow-auto thin-scrollbar">
                    {data.details.map((section, index) => (
                        <section
                            id={section.category}
                            key={index}

                            ref={(el) => { sectionRefs.current[section.category] = el; }}
                            
                        >
                            <h1 className="flex items-center gap-1 justify-start text-[14px] text-[#24272c] font-medium mb-4">
                                <span className="flex w-4  h-[1px] bg-gray-300"></span>
                                <span className=" ">{section.category}</span>
                                <span className="flex-1 h-[1px] bg-gray-300"></span>
                            </h1>
                            {/* <h2 className="text-2xl font-bold mb-4">{section.category}</h2> */}
                            {section.specs?.map((item,index) => {
                                return (
                                    <div key={index} className='p-4 grid grid-cols-2'>
                                        <span>
                                            {item.name}
                                        </span>
                                        <span>
                                            {item.value}
                                        </span>
                                    </div>
                                )
                            })}

                        </section>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Scrollspy;