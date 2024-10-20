import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "constants/constants";
import { Location } from "entities";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function LocationCard({ store }: { store: string | string[] | undefined }) {
    if (!store) return null
    const token = cookies().get(TOKEN_NAME)?.value
    const { data } = await axios.get<Location[]>(`${API_URL}/locations/${store}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    )
    return data.map((location)=>(
        <Card>
            <CardHeader>
                <p className="w-full">Tienda: <b>{location.locationName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full">Manager: <Link href={{pathname: '/dashboard/managers'}}> <b>{location.manager?.managerName}</b></Link></p>
            </CardBody>
        </Card>
    ))

}