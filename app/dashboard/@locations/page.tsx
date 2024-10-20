import axios from 'axios'
import { cookies } from 'next/headers';
import { TOKEN_NAME } from '../../../../ocso-proyect/src/auth/constans/jwt.constans';
import { Location } from 'entities';
import SelectLocations from './_component/selectLocations';
import LocationCard from './_component/LocationCard';

const LocationsPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const userCookies = cookies()
    const token = userCookies.get(TOKEN_NAME)?.value
    let { data } = await axios.get<Location[]>("http://127.0.0.1:4000/locations", {
        headers: {
            Authorization: `Bearer ${token}`
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
        ...data
    ]
    return (
        <div className="w-7/12">
            <div className='w-full flex flex-col items-center h-[90vh]'>
                <div className='w-1/2 my-8'>
                    <SelectLocations locations={data} store={searchParams?.store}/>
                </div>
                <div className='w-8/12'>
                    <LocationCard store={searchParams.store}/>
                </div>
            </div>
        </div>
    )
}

export default LocationsPage