import Link from 'next/link';

interface AdminManageProps {
    title: string;
    desc: string;
    link: string;
}

export default function AdminManage({ title, desc, link }: AdminManageProps) {
    return (
        <Link
            href={`admin/${link}`}
            className="block transform hover:scale-105 transition duration-300 ease-in-out bg-white rounded-xl shadow-lg overflow-hidden"
        >
            <div className="p-6">
                <h5 className="text-lg font-semibold mb-2">
                    {title}
                </h5>
                <p className="text-gray-600">
                    {desc}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    Go to {link.replace(/([A-Z])/g, " $1").toLowerCase()}
                </span>
            </div>
        </Link>
    );
}
