import { ADMIN_NOTIFICATIONS } from "@/constants/__mock__/adminMock";
import { getStatusColor } from "@/helpers/color-helpers";

export default function AdminNotification() {
  return (
    <div className="p-4 rounded-xl bg-white dark:bg-darkBackground shadow border h-full">
      <p className="text-[#616161] font-semibold">Notifications</p>

      <ul className="flex flex-col gap-4 mt-4 inter-tight">
        {ADMIN_NOTIFICATIONS.map((item, id) => (
          <li key={id} className={`flex items-center px-2 gap-4`}>
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: getStatusColor(item.type) }}
            ></div>

            <div className="flex-1">
              <h1>{item.title}</h1>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
