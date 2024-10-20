import EmployeesLocation from "./@locations/_component/EmployeesLocation";

export default function PageDashboard({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    return (
        <>
            <div className="">
                <div className="h-[90vh overflow-hidden overflow-y-auto first:mt-0 last:mb-0">
                    
                        <EmployeesLocation store={searchParams?.store} />
                    <p className="w-full text-2xl px-2 text-center mt-10">Selecciona una tienda para ver los empleados</p>
                </div>
            </div>
        </>
    );
}