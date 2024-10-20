import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";

export default function LayoutDashboard({
    children,
    locations,
}: Readonly<{
    children: React.ReactNode;
    locations: React.ReactNode;
}>) {
    return (
        <div className="">
            <Header />
            <div className="flex flex-rew items-center bg-[f0f0f0]">
                <Sidebar />
                {children}
                {locations}
            </div>

        </div>
    )
}