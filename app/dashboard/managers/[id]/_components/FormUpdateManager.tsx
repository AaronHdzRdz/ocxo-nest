import updateManager from "actions/managers/update";
import { Manager } from "entities";
import { Button, Input } from "@nextui-org/react";
import SelectStore from "./SelectStore";
import { API_URL } from "constants/constants";
import { authHeaders } from "helpers/authHeaders";
export default async function FormUpdateManager({
  manager,
}: {
  manager: Manager;
}) {
  const updateManagerWithId = updateManager.bind(null, manager.managerId);
  const responseStores = await fetch(`${API_URL}/locations`, {
    headers: {
      ...authHeaders(),
    },
  });
  const stores = await responseStores.json();
  return (
    <form action={updateManagerWithId} className="bg-orange-400 rounded-md">
      <h1> Actualizar Manager </h1>
      <Input
        defaultValue={manager.managerName}
        placeholder="Alberto Sotero"
        name="managerName"
      />
      <Input
        defaultValue={manager.managerEmail}
        placeholder="manager@ocxo.com"
        name="managerEmail"
      />
      <Input
        defaultValue={String(manager.managerSalary)}
        placeholder="manager@ocxo.com"
        name="12000"
      />
      <Input
        defaultValue={manager.managerPhoneNumber}
        placeholder="manager@ocxo.com"
        name="4427851597"
      />
      <SelectStore
        stores={stores}
        defaultStore={manager?.location?.locationId}
      />
      <Button color="primary" type="submit">
        Actualizar
      </Button>
    </form>
  );
}
