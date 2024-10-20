import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "constants/constants";
import { Employee, } from "entities";
import { cookies } from "next/headers";

export default async function EmployeesLocation({ store }: { store: string | string[] | undefined }) {
    const token = cookies().get(TOKEN_NAME)?.value; // Asegúrate de obtener el valor del token
    const { data } = await axios.get<Employee[]>(`${API_URL}/employees/location/${store}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!data) return null;

    return data.map((employee) => {
        const fullname = employee.employeeName + ' ' + employee.employeeLastName;
        return (
            <Card className="mx-10 my-10">
                <CardHeader>
                    <p className="w-full">Nombre: <b>{fullname}</b> </p>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <p className="w-full">Email: <b>{employee.employeeEmail}</b> </p>
                    <p className="w-full">Teléfono: <b>{employee.employeePhoneNumber}</b> </p>
                    <p className="w-full">ID: <b>{employee.employeeId}</b> </p>
                </CardBody>
            </Card>)
    })
}