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



const ToggleTable: React.FC<ToggleTableProps> = ({ content = [], links = [], title, columns, data }) => {

    const renderContent = (text: string | JSX.Element) => {
        if (typeof text === 'string') {
            const regex = /\{bold\}([\s\S]*?)\{\/bold\}/g;
            const elements: React.ReactNode[] = [];
            let lastIndex = 0;
            let match: RegExpExecArray | null;

            while ((match = regex.exec(text)) !== null) {
                const boldText = match[1]; // Text inside {bold}...{/bold}
                const start = match.index;
                const end = regex.lastIndex;

                // Add plain text before the bold content
                if (start > lastIndex) {
                    elements.push(text.slice(lastIndex, start));
                }

                // Find the corresponding link for the bold text
                const link = links?.find((link) => link.text === boldText);

                if (link) {
                    // Add the bold content as a link
                    elements.push(
                        <Link
                            href={link.url}
                            key={boldText}
                            className="text-blue-500 font-bold underline"
                        >
                            {boldText}
                        </Link>
                    );
                } else {
                    // Add bold text without a link if not found
                    elements.push(<strong key={boldText}>{boldText}</strong>);
                }

                lastIndex = end;
            }

            // Add remaining plain text after the last bold match
            if (lastIndex < text.length) {
                elements.push(text.slice(lastIndex));
            }

            return elements;
        } else {
            // If it's a JSX.Element, render it directly
            return text;
        }
    };
    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => setShowAll((prev) => !prev);
    console.log(content, links);


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
                        {renderContent(text)}
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
