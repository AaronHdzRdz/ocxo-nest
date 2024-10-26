import { Location } from "entities";
import { API_URL } from "constants/constants";
import LocationCard from "./_component/LocationCard";
import FormNewLocation from "./_component/FormNewLocation";
import DeleteLocationButton from "./_component/DeleteLocationButton";
import { authHeaders } from "helpers/authHeaders";
import SelectLocations from "./_component/selectLocations";
import UpdateLocation from "./_component/UpdateLocation";
import FormUpdateLocation from "./_component/FormUpdateLocation"

const LocationsPage = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    const response = await fetch(
        `${API_URL}/locations`,
        {
            headers: {
                ...authHeaders()
            },
            next: {
                tags: ["dashboard:locations"]
            }
        },
    );
    let data: Location[] = await response.json()
    data = [
        {
            locationId: 0,
            locationName: "Ninguna",
            locationLatLng: [0, 0],
            locationAddress: "No existe",
            employees: []
        },
        ...data,
    ];
    return (
        <div className="w-7/12">
            <div className="w-full flex flex-col items-center h-[90vh] bg-yellow-50">
                <div className="w-1/2 my-10">
                    <SelectLocations locations={data} store={searchParams.store} />
                </div>
                <div className="w-8/12">
                    <LocationCard store={searchParams.store} />
                </div>
                <div className="w-6/12">
                    <FormNewLocation store={searchParams.store} />
                </div>
                <DeleteLocationButton store={searchParams.store} />
                <UpdateLocation>
                    <FormUpdateLocation store={searchParams.store} />
                </UpdateLocation>
            </div>
        </div>
    );
};


export default LocationsPage;