import { ReactNode } from "react";
import ManagerCards from "./_components/ManagerCards";
export default function LayoutManagers({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="w-4/12 max-h-[90vh] h-[90vh] overflow-hidden overflow-y-auto">
                <ManagerCards />
            </div>
            <div>{children}</div>
        </>
    );
}