import { Manager } from "entities";
import { API_URL } from "constants/constants";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";
import { authHeaders } from "helpers/authHeaders";

export default async function ManagerCards() {
    const response = await fetch(`${API_URL}/managers`, {
        method: "GET",
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: ["dashboard:managers"],
        },
    });
    const data: Manager[] = await response.json();
    return data?.map((manager: Manager) => {
        return (
            <Link href={{ pathname: `/dashboard/managers/${manager.managerId}` }}>
                <Card className="mx-10 my-10 hover:scale-[110%] hover:bg-blue-100">
                    <CardHeader>
                        <p className="w-full">
                            Nombre: <b>{manager.managerName}</b>
                        </p>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className="w-full">
                            Email: <b>{manager.managerEmail}</b>
                        </p>
                        <p className="w-full">
                            Teléfono: <b>{manager.managerPhoneNumber}</b>
                        </p>
                    </CardBody>
                </Card>
            </Link>
        );
    });
}