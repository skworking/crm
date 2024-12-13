"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

interface BoldLink {
    text: string;
    url: string;
}
interface ToggleTableProps {
    content?: (string | JSX.Element)[];
    links?: BoldLink[];
    title: string;
    columns: string[];
    data: { [key: string]: string }[];
}

const renderContent = (text: string | JSX.Element, index: number) => {
    if (typeof text === 'string') {
        // Handle {bold} and {link} tags inside the string
        const boldParts = text.split(/{bold}/);
        return boldParts.map((part, i) => {
            if (i % 2 === 1) {
                // Handle text inside {bold}...{/bold}
                const boldText = part.split("{/bold}")[0];

                // Handle nested {link} tags inside the bold text
                const linkParts = boldText.split(/{link}/);
                const boldContent = linkParts.map((linkPart, j) => {
                    if (j % 2 === 1) {
                        // Handle text inside {link}...{/link}
                        const linkText = linkPart.split("{/link}")[0];
                        return (
                            <a
                                key={`bold-link-${index}-${i}-${j}`}
                                href={linkText}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ fontWeight: 'bold' }} // Ensure the link is also bold
                            >
                                {linkText}
                            </a>
                        );
                    }
                    return <Link href={'#'} key={`bold-${index}-${i}-${j}`}>{linkPart}</Link>;
                });

                return boldContent;
            }

            // Handle text outside {bold} tags
            const linkParts = part.split(/{link}/);
            return linkParts.map((linkPart, j) => {
                if (j % 2 === 1) {
                    // Handle text inside {link}...{/link}
                    const linkText = linkPart.split("{/link}")[0];
                    return (
                        <a
                            key={`link-${index}-${i}-${j}`}
                            href={linkText}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {linkText}
                        </a>
                    );
                }
                return <span key={`span-${index}-${i}-${j}`}>{linkPart}</span>;
            });
        });
    } else {
        // If it's a JSX.Element, render it directly
        return text;
    }
};

const ToggleTable: React.FC<ToggleTableProps> = ({ content = [], links = [], title, columns, data }) => {
    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => setShowAll((prev) => !prev);
    console.log(content,links);


    return (
        <div>
            <div
                className={`${showAll ? "line-clamp-none" : "line-clamp-2"
                    } text-[rgba(36,39,44,.7)] text-base space-y-4 text-[14px] mb-4`}
            >

                {/* {content.map((paragraph, index) => (
                     <p key={index}>{paragraph}</p>
                ))} */}
                {/* if(content.type === string[]){
                    <DynamicTextWithLinks content={content} links={links} />
                }else{

                } */}

                
                {content.map((text, index) => (
                    <React.Fragment key={index}>
                        {renderContent(text, index)}
                    </React.Fragment>
                ))}

            </div>

            {showAll && (
                <>
                    <h1 className="text-[23px] text-[#24272c] font-medium mb-4">{title}</h1>
                    <table className="table-auto w-full border-collapse border border-gray-200 mt-4">
                        <thead>
                            <tr>
                                {columns.map((col) => (
                                    <th
                                        key={col}
                                        className="border font-semibold border-gray-300 px-4 py-2 bg-[#fafafa] text-[#24272c] text-left"
                                    >
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    {columns.map((col) => (
                                        <td
                                            key={col}
                                            className="border text-[rgba(36,39,44,.7)] border-gray-300 px-4 py-2"
                                        >
                                            {row[col]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}

            <div
                className="inline-flex items-center mt-2  cursor-pointer"
                onClick={handleToggle}
            >
                <span className="mr-2 text-[#d94025] font-bold">
                    {showAll ? "Less" : "Read More"}
                </span>
                <div
                    className="relative w-5 h-5 bg-[#d94025] rounded-full flex justify-center items-center"
                >
                    {showAll ? (
                        <FaAngleDown className="w-3 h-3 fill-white" />
                    ) : (
                        <FaAngleRight className="w-3 h-3 fill-white" />
                    )}
                </div>
            </div>


        </div>
    );
};

export default ToggleTable;
