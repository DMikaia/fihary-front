"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", ammount: 186 },
  { month: "February", ammount: 305 },
  { month: "March", ammount: 237 },
  { month: "April", ammount: 73 },
  { month: "May", ammount: 209 },
  { month: "June", ammount: 214 },
];

const chartConfig = {
  ammount: {
    label: "Montant",
    color: "#2A9D90",
  },
} satisfies ChartConfig;

interface Props {
  id: number;
  last: number;
}

export function SellsChart({ id, last }: Props) {
  return (
    <Card
      className={`${id === 0 ? "ml-0" : ""} ${id === last ? "mr-0" : ""} mx-4`}
    >
      <CardHeader>
        <CardTitle>BOX{id}</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="ammount"
              type="natural"
              stroke="var(--color-ammount)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-ammount)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Vente stable <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
