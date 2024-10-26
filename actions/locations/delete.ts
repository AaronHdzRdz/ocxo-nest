"use server";
import { API_URL } from "constants/constants";
import { authHeaders } from "helpers/authHeaders";

export default async function deleteLocation(formData: FormData) {
    const locationId = formData.get("deleteValue")
    if (!locationId) return;
    fetch(`${API_URL}/locations/${locationId}`, {
        method: "DELETE",
        headers: {
            ...authHeaders(),
        }
    })
}