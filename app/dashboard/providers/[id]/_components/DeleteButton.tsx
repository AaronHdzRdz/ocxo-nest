import deleteProvider from "actions/providers/delete"
import { Button } from "@nextui-org/react"
export default function DeleteProviderButton({providerId} : {providerId: string}) {
  const deleteProviderById = deleteProvider.bind(null, providerId)
  return (
    <form action={deleteProviderById} className="flex">
      <Button className="w-full" type="submit" color="danger"> Estoy seguro </Button>
    </form>
  )
}
