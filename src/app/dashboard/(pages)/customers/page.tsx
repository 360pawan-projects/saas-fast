import { DataTable } from "./table";
import { fetchUsers } from "@/lib/db/controller/user.controller";

export default async function CustomersPage() {
  const users = await fetchUsers();

  return (
    <main className="p-8 h-[calc(100vh-65px)] overflow-y-scroll">
      <DataTable data={users} />
    </main>
  );
}
