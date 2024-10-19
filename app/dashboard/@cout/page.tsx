import axios from 'axios'
import { cookies } from 'next/headers';
import { TOKEN_NAME } from './../../../../ocso-proyect/src/auth/constans/jwt.constans';

const CountPage = async() => {
    const userCookies = cookies()
    const token = userCookies.get(TOKEN_NAME)?.value
    const countLocations = await axios.get("http://127.0.0.1:4000/locations", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const cantidad = countLocations?.data?.length;
    return `Hay ${cantidad} tienda${cantidad === 1 ? "" : "s"}`;
}

export default CountPage