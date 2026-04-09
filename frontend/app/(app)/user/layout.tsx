import SideNav from '../../components/SideNav';
export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='min-h-screen flex flex-col relative items-center justify-center bg-white/5 text-white'>
            <SideNav />
            {children}
        </div>
    )
}