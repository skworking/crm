import React from 'react'
interface tools {
    heading: string;
    image: string;
}

interface CardFormateProps {
    data: tools[]; // Accept data as a prop
}

const ToolsCard: React.FC<CardFormateProps> = ({ data }) => {
    return (
        <div className="flex  overflow-auto no-scrollbar  ">
            {data.map((tool, index) => (
                <div
                    key={index}
                    className=" flex-shrink-0 bg-white space-x-4 p-1  "
                >
                    <img
                        src={tool.image}
                        alt={tool.heading}
                        className="w-full h-32 object-cover rounded-full mb-4"
                    />
                    <h2 className="text-[12px] text-center">{tool.heading}</h2>
                </div>
            ))}
        </div>
    )
}

export default ToolsCard;