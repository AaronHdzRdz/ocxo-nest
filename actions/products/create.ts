"use server";

import { API_URL } from "constants/constants";
import { authHeaders } from "helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function createProduct(formData: FormData) {
  let product: any = {};
  for (const key of formData.keys()) {
    if (!key.includes("$ACTION_ID")) {
      product[key] = formData.get(key);
    }
  }
  product.price = +product.price
  product.countSeal = +product.countSeal
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      ...authHeaders(),
      'content-type': 'application/json'
    },
  })
  console.log(await response.json())
  if (response.status === 201) revalidateTag("dashboard:products")
}
