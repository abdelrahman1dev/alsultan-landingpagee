import SideNav from '../../components/SideNav';
export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='min-h-screen flex relative items-center justify-center bg-[#0d0d0d] text-white'>
            <SideNav />
            {children}
        </div>
    )
}