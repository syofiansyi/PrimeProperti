// resources/js/Layouts/AppLayout.tsx
import { ReactNode } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import { FaTachometerAlt, FaBox, FaUsers, FaSignOutAlt } from "react-icons/fa";

interface Props {
    children: ReactNode;
}

export default function AppLayout({ children }: Props) {
    const { url } = usePage();
    const logout = () => router.post("/logout");
    return (
        <div className="flex min-h-screen bg-white">
            {/* Sidebar - All content left-aligned */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col shadow-lg">
                {/* Logo/Header */}
                <div className="p-4 text-2xl font-bold border-b border-gray-700 flex items-center pl-6">
                    <span className="mr-2 text-3xl">📦</span>
                    <span className="text-left">My App</span>
                </div>

                {/* Navigation - Strict left alignment */}
                <nav className="flex flex-col px-0 py-4 pl-6 space-y-2">
                    <Link
                        href="/dashboard"
                        className={`flex items-center py-3 transition duration-200 hover:bg-gray-700 text-left w-full pl-2 ${
                            url.startsWith("/dashboard")
                                ? "bg-gray-700 font-semibold border-l-4 border-blue-500"
                                : ""
                        }`}
                    >
                        <FaTachometerAlt className="w-5 h-5 mr-3" />
                        <span>Dashboard</span>
                    </Link>

                    <Link
                        href="/products"
                        className={`flex items-center py-3 transition duration-200 hover:bg-gray-700 text-left w-full pl-2 ${
                            url.startsWith("/products")
                                ? "bg-gray-700 font-semibold border-l-4 border-blue-500"
                                : ""
                        }`}
                    >
                        <FaBox className="w-5 h-5 mr-3" />
                        <span>Products</span>
                    </Link>

                    <Link
                        href="/users"
                        className={`flex items-center py-3 transition duration-200 hover:bg-gray-700 text-left w-full pl-2 ${
                            url.startsWith("/users")
                                ? "bg-gray-700 font-semibold border-l-4 border-blue-500"
                                : ""
                        }`}
                    >
                        <FaUsers className="w-5 h-5 mr-3" />
                        <span>Users</span>
                    </Link>
                </nav>

                {/* Footer - Left-aligned */}
                <div className="mt-auto p-4 border-t border-gray-700 text-sm text-white text-left pl-6">
                    <div className="flex justify-between">
                        <div> &copy; 2025 My App</div>

                        <button onClick={logout}>
                            <FaSignOutAlt className="w-5 h-5 mr-3" />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-white p-6 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
