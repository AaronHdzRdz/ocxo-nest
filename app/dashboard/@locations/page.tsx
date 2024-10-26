import axios from 'axios'
import { Location } from 'entities';
import SelectLocations from './_component/selectLocations';
import LocationCard from './_component/LocationCard';
import { API_URL } from 'constants/constants';
import FormNewLocation from './_component/FormNewLocation';
import { authHeaders } from 'helpers/authHeaders';
import DeleteLocationButton from './_component/DeleteLocationButton';

const LocationsPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    let { data } = await axios.get<Location[]>(`${API_URL}/locations`, {
        headers: {
            ...authHeaders
        }
    });
    data = [
        {
            locationId: 0,
            locationName: "Ninguna",
            locationLatLng: [0, 0],
            locationAddress: "No existe",
            employees: []
        },
        ...data,
    ]
    return (
        <div className="w-7/12">
            <div className='w-full flex flex-col items-center h-[90vh]'>
                <div className='w-1/2 my-8'>
                    <SelectLocations locations={data} store={searchParams?.store} />
                </div>
                <div className='w-8/12'>
                    <LocationCard store={searchParams.store} />
                </div>
                <div className="w-6/12">
                    <FormNewLocation store={searchParams.store} />
                </div>
                <DeleteLocationButton store={searchParams.store} />
            </div>
        </div>
    )
}

export default LocationsPage