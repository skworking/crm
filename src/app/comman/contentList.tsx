import Link from "next/link";

interface BoldLink {
    text: string;
    url: string;
  }
interface propsType {
    content: string [],
    links?: BoldLink[];
}
const DynamicTextWithLinks: React.FC<propsType> = ({ content, links }) => {
    const renderStringWithLinks = (text: string): React.ReactNode[] => {
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
    };

    return (
        <div>
            {content.map((text, index) => (
                <p key={index}>{renderStringWithLinks(text)}</p>
            ))}
        </div>
    );

};
export default DynamicTextWithLinks;