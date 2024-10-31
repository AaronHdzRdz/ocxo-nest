"use server";

import { API_URL } from "constants/constants";
import { authHeaders } from "helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function createManager(managerId: string, formData: FormData) {
  let manager: any = {};
  for (const key of formData.keys()) {
    manager[key] = formData.get(key);
  }
  const response = await fetch(`${API_URL}/managers/${managerId}`, {
    method: "PATCH",
    body: JSON.stringify(manager),
    headers: {
      ...authHeaders(),
    },
  })
  if (response.status === 200){
     revalidateTag("dashboard:managers")
     revalidateTag(`dashboard:managers:${managerId}`)

  }
}
