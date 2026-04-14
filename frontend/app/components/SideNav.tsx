"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, BellRing, X, EllipsisVertical } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const navItems = [
    { name: "الرئيسية", href: "/user/dashboard"  },
    { name: "الملف الشخصي", href: "/user/profile" },
    { name: "الدروس", href: "/user/courses" },
    { name: "المحفظة", href: "/user/wallet" },
    { name: "التاريخ", href: "/user/history" },
    { name: "الدعم الفني", href: "/user/tech-support" },
    { name: "الإعدادات", href: "/user/settings" },
];

function SideNav() {
    const path = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNotifOpen, setIsNotifOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const notifRef = useRef<HTMLDivElement>(null);

    const isActive = (href: string) => path.startsWith(href);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
            if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
                setIsNotifOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            {/* Desktop sidebar */}
            <aside className="fixed lg:static  lg:block right-0 top-0 w-64 h-screen bg-[#1C1C18] text-[#e6d3a3] p-4 border-2 border-[#3b3b34]/50 hidden  shadow-sm shadow-[#e6d3a3]/20">
                <nav>
                    <ul className="space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block px-4 py-2 rounded transition ${isActive(item.href) ? "bg-[#3b3b34]" : "hover:bg-[#2a2a25] hover:border-2 hover:border-[#3b3b34]/50"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Mobile top bar */}
            <div className="lg:hidden border-b-2 border-[#3b3b34] px-4 py-2 fixed flex items-center justify-between top-0 right-0 z-50 bg-[#1C1C18] shadow-sm shadow-[#e6d3a3]/20 w-full">
                <button onClick={() => setIsMenuOpen(true)} className="text-[#e6d3a3] p-2 rounded">
                    <Menu />
                </button>
                <div>
                    <button onClick={() => setIsNotifOpen(true)} className="text-[#e6d3a3] p-2 rounded">
                        <BellRing />
                    </button>
                    <button className="text-[#e6d3a3] p-2 rounded">
                        <EllipsisVertical />
                    </button>
                </div>
            </div>

            {/* Notification panel */}
            {isNotifOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-16">
                    <div
                        ref={notifRef}
                        className="bg-[#1C1C18] w-[90%] max-w-sm rounded-xl shadow-lg p-4 border-2 border-[#3b3b34]"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-[#e6d3a3] font-semibold text-lg">الإشعارات</h2>
                            <button
                                onClick={() => setIsNotifOpen(false)}
                                className="text-[#e6d3a3]/70 hover:text-[#e6d3a3]"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <p className="text-[#e6d3a3]/70 text-sm text-center py-6">لا توجد إشعارات جديدة</p>
                    </div>
                </div>
            )}

            {/* Menu backdrop */}
            {isMenuOpen && <div className="fixed inset-0 bg-black/50 z-40" />}

            {/* Mobile sidebar */}
            <aside
                ref={menuRef}
                className={`fixed top-0 right-0 h-screen w-[80%] bg-[#1C1C18] text-[#e6d3a3] p-4 z-50 transform transition-transform duration-300 border-2 border-[#3b3b34]/50 shadow-sm shadow-[#e6d3a3]/20 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } lg:hidden`}
            >

                <nav>
                    <ul className="space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-4 py-2 rounded transition ${isActive(item.href) ? "bg-[#3b3b34]" : "hover:bg-[#2a2a25] hover:border-2 hover:border-[#3b3b34]/50"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </nav>
                <footer className="absolute bottom-0 right-0 p-4 text-center text-sm text-[#e6d3a3]/80 bg-[#3b3b34] w-full border-t border-[#3b3b34]/50">
                    © 2024 في مادة التاريخ - جميع الحقوق محفوظة
                </footer>
            </aside>
        </>
    );
}

export default SideNav;