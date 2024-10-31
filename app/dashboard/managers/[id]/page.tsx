import { API_URL } from "constants/constants";
import { Manager } from "entities";
import { authHeaders } from "helpers/authHeaders";
import ManagerCard from "./_components/ManagerCard";
import DeleteManagerButton from "./_components/DeleteManagerButton";
import FormUpdateManager from "./_components/FormUpdateManager";
import UpdateManager from "./_components/UpdateManager";
export default async function ManagerPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const response = await fetch(`${API_URL}/managers/${params.id}`, {
    headers: {
      ...authHeaders(),
    },
    next: {
      tags: [`dashboard:managers:${params.id}`, `dashboard:managers`],
    },
  });
  const data: Manager = await response.json();
  return (
    <div className="flex flex-col gap-10 flex-grow-0 items-center justify-center">
      <ManagerCard manager={data} />
      <div className="bg-white shadow-medium rounded-md px-10 py-2">
        <UpdateManager>
          <FormUpdateManager manager={data} />
        </UpdateManager>
        <DeleteManagerButton managerId={data.managerId} />
      </div>
    </div>
  );
}