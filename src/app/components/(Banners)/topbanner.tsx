import Image from "next/image";

interface BannerProps {
    imageUrl: string;
    title: string;
    height?: number;
}

const TopBanner: React.FC<BannerProps> = ({ imageUrl, title, height = 400 }) => {
    return (
        <div className="relative">
            <div className={`w-full ${height ? `lg:h-[${height}px] h-[200px]` : ""}`}>
                {/* Background Image */}
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes="100vw"
                    className="object-cover w-full h-full"
                />

                {/* Red Circle & Text Content */}
                <div className="absolute max-w-7xl inset-0 flex items-center  m-auto overflow-hidden">
                    <div className="relative lg:ml-[50px] flex items-center justify-center lg:w-[600px] lg:h-[600px] w-[350px] h-[350px] bg-[#d94025] bg-opacity-[.95] mix-blend-multiply rounded-full lg:bottom-20"></div>

                    {/* Title */}
                    <div className="absolute hidden lg:flex inset-y-20 items-center max-w-3xl p-4 m-auto">
                        <h1 className="text-white font-bold lg:text-[47px] text-[20px] px-7">
                            {title}
                        </h1>
                    </div>
                </div>

                {/* Mobile Title */}
                <div className="absolute lg:hidden inset-y-20 items-center max-w-3xl p-4 m-auto">
                    <h1 className="text-white font-bold text-[20px] px-7">{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
