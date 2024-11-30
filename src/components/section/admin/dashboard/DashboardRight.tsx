import AdminNotification from "./components/Notification";
import { GeneralChart } from "./components/Radar";

export default function DashboardRight() {
  return (
    <div className="w-full lg:-[30%] flex flex-col md:flex-row lg:flex-col gap-8">
      <div className="w-full h-[322px]">
        <AdminNotification />
      </div>

      <div className="w-full">
        <GeneralChart />
      </div>
    </div>
  );
}
