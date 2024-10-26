"use server";
import { API_URL } from "constants/constants";
import { authHeaders } from "helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteLocation(formData: FormData) {
    const locationId = formData.get("deleteValue")
    if (!locationId) return;
    fetch(`${API_URL}/locations/${locationId}`, {
        method: "DELETE",
        headers: {
            ...authHeaders(),
        }
    })
    revalidateTag("dashboard:locations");
    redirect("/dashboard")
}