import AdminNotification from "../components/Notification";
import { GeneralChart } from "./components/Radar";

export default function DashboardRight() {
  return (
    <div className="w-full lg:w-[30%] flex-col hidden lg:flex gap-8">
      <div className="w-full h-[322px]">
        <AdminNotification />
      </div>

      <div className="w-full">
        <GeneralChart />
      </div>
    </div>
  );
}
