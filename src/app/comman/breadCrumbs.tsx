import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    path: string;
}

interface BreadcrumbsProps {
    items?: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    if (!items) {
        return (
            <>breadcrumb loading...</>
        )
    }
    return (
        <div className="bg-grey-light max-w-7xl m-auto rounded-md lg:py-4 lg:px-0 py-4 px-4">
            <nav className="flex items-center space-x-2 text-sm" aria-label="breadcrumb">
                {items?.map((item, index) => (
                    <div key={index} className="flex items-center">
                        {index > 0 && <span className="text-gray-400">/</span>}

                        {index !== items.length - 1 ? (
                            <Link href={item.path} className="">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-gray-500">{item.label}</span>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Breadcrumbs;
