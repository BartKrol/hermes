import { getActiveEdges } from "@/actions/edgesAction";
import HermesComponent from "../../components/hermes";

export const dynamic = "force-dynamic";

export default async function HermesPage() {
  const activeEdges = await getActiveEdges();

  return <HermesComponent activeEdges={activeEdges} />;
}
