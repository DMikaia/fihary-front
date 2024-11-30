import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface StatProps {
  id: number;
  title: string;
  icon: string;
  data: number;
  className?: string;
}

export default function StatCard({
  id,
  title,
  icon,
  data,
  className,
}: StatProps) {
  return (
    <Card className="flex flex-col items-start gap-4 p-4">
      <p className="text-secondary-2/75 text-sm border border-gray rounded-xl">
        {title}
      </p>
      <CardContent className="w-full flex gap-4 items-center p-0">
        <div className={`w-fit h-fit p-3 rounded-full ${className}`}>
          <Image src={icon} width={24} height={24} alt={`stat_card_${id}`} />
        </div>

        <h1 className="text-3xl font-semibold inter-tight">{data}</h1>
      </CardContent>
    </Card>
  );
}
