import { API_URL } from "constants/constants";
import { Provider } from "entities";
import { Button } from "@nextui-org/react";
import { authHeaders } from "helpers/authHeaders";
import Link from "next/link";
import ProviderCard from "./_components/ProviderCard";
import { LuPlus } from "react-icons/lu";
import CreateProvider from "./_components/CreateProvider";
import FormCreateProvider from "./_components/FormCreateProvider";
const ProviderPage = async () => {
  const response = await fetch(`${API_URL}/providers`, {
    headers: {
      ...authHeaders(),
    },
  });
  const providers: Provider[] = await response.json();

  return (
    <div className="flex flex-grow-0 flex-col items-end w-full px-10 pt-10 h-[90vh]">
      <CreateProvider>
        <FormCreateProvider />
      </CreateProvider>
      <div className="flex flex-wrap w-full py-20 flex-grow-0 gap-14">
        {providers.map((provider: Provider) => (
          <Link
            className="hover:scale-110 transition-transform"
            href={{ pathname: `/dashboard/providers/${provider.providerId}` }}
          >
            <ProviderCard provider={provider} key={provider.providerId} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProviderPage;
