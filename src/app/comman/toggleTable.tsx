"use client";

import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

interface ToggleTableProps {
    title: string;
    columns: string[];
    data: { [key: string]: string }[];
}

const ToggleTable: React.FC<ToggleTableProps> = ({ title, columns, data }) => {
    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => setShowAll((prev) => !prev);

    return (
        <div>
            {showAll && (
                <>
                    <h1 className="text-2xl text-[#24272c] font-bold mb-4">{title}</h1>
                    <table className="table-auto w-full border-collapse border border-gray-200 mt-4">
                        <thead>
                            <tr>
                                {columns.map((col) => (
                                    <th
                                        key={col}
                                        className="border border-gray-300 px-4 py-2 bg-[#fafafa] text-[#24272c] text-left"
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
                                            className="border border-gray-300 px-4 py-2"
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
