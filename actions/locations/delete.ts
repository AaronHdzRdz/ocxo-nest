"use server";
import { API_URL, TOKEN_NAME } from "constants/constants";
import axios from "axios";
import { cookies } from "next/headers";
export default async function deleteLocation(formData: FormData) {
    const locationId = formData.get("deleteValue")
    if (!locationId) return;
    const token = cookies().get(TOKEN_NAME)?.value
    axios.delete(`${API_URL}/locations/${locationId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}