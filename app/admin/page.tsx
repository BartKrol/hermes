import { getActiveEdgeData } from "@/actions/edgesAction";
import AdminView from "./view";

export default async function AdminPage() {
  const activeEdges = await getActiveEdgeData();

  return (
    <div className="container mx-auto px-4 pt-4 pb-3 flex justify-between items-center ">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Admin</h1>
        <AdminView activeEdges={activeEdges} />
      </div>
    </div>
  );
}
