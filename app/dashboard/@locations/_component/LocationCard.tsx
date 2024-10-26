import { Location } from "entities";
import axios from "axios";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { cookies } from "next/headers";
import { API_URL, TOKEN_NAME } from "constants/constants";
import Link from "next/link";
export default async function LocationCard({
    store,
}: {
    store: string | string[] | undefined;
}) {
    if (!store) return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const { data } = await axios.get<Location>(`${API_URL}/locations/${store}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return (
        <Card>
            <CardHeader>
                <b className="w-full text-2xl">{data.locationName}</b>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col w-full items-center">
                <p className="w-full">
                    Manager:{" "}
                    <Link href={{ pathname: `/dashboard/managers` }}>
                        <b>{data.manager?.managerName}</b>
                    </Link>
                </p>
                <p className="w-full">
                    Dirección: <b>{data.locationAddress}</b>
                </p>

            </CardBody>
        </Card>
    );
}