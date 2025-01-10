import { getActiveNodes } from "@/actions/edgesAction";
import { getSettings } from "@/actions/settingsAction";
import Hermes from "@/components/hermes";

export const dynamic = "force-dynamic";

export default async function HermesPage() {
  const activeNodes = await getActiveNodes();
  const settings = await getSettings();

  return <Hermes activeNodes={activeNodes} endTime={settings.end_time} />;
}
