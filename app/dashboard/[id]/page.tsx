import { API_URL } from "constants/constants";
import { Manager } from "entities";
import { authHeaders } from "helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
export default async function ManagerPage({
    params,
}: {
    params: {
        id: string;
    };
}) {
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: [`dashboard:managers:${params.id}`, `dashboard:managers`]
        }
    });
    const data: Manager = await response.json();
    return (
        <Card className="mx-20 py-2 bg-orange-50">
            <CardHeader>
                <p className="w-full">
                    Nombre: <b>{data.managerName}</b>
                </p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full">
                    Email: <b>{data.managerEmail}</b>
                </p>
                <p className="w-full">
                    Teléfono: <b>{data.managerPhoneNumber}</b>
                </p>
                {data.location ? (
                    <>
                        <p>
                            Tienda: <b>{data.location.locationName}</b>
                        </p>
                        <iframe
                            className="border-2 border-orange-800 rounded-md my-2"
                            width="300"
                            height="200"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAz0Y6dhhUVleZmt7-H4PO1QQWCSEz3LBg
                    &q=${data.location.locationLatLng[0]},${data.location.locationLatLng[1]}`}
                        ></iframe>
                    </>
                ) : (
                    <p> No tiene tienda </p>
                )}
            </CardBody>
        </Card>
    );
}