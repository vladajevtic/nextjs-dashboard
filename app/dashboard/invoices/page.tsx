// import { Button } from "@/components/ui/button"
// export default function Page() {
//   return (
//       <div className='bg-sky-500/50'>
//         <Button variant='boki' asChild={false} size= "sm">Click me</Button>
//       </div>
//     )
// }

// "use client"
// import React, { PureComponent, useEffect, useState } from 'react';

// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
// import { type ChartConfig } from "@/components/ui/chart"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
//   ChartLegend,
//   ChartLegendContent
// } from "@/components/ui/chart";

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig

// export default function Page() {
//   return (
//      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
//        <BarChart accessibilityLayer data={chartData}>
//          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
//          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
//        </BarChart>
//      </ChartContainer>

//   )
// }


// "use client"

// import * as React from "react"
// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
// import { type ChartConfig } from "@/components/ui/chart"

// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
//   ChartLegend,
//   ChartLegendContent
// } from "@/components/ui/chart";
// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]
// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "#2563eb",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "#60a5fa",
//   },
// } satisfies ChartConfig
// export default function Page() {
//   return (
//      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
//        <BarChart accessibilityLayer data={chartData}>
//         <CartesianGrid vertical={false} />
//           <XAxis
//             dataKey="month"
//             tickLine={false}
//             tickMargin={10}
//             axisLine={false}
//             tickFormatter={(value) => value.slice(0, 3)}
//           />
//          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
//          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
//        </BarChart>
//      </ChartContainer>
//   )
// }
// "use client"

// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

// import { ChartConfig, ChartContainer } from "@/components/ui/chart"
// import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"


// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "#2563eb",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "#60a5fa",
//   },
// } satisfies ChartConfig

// export default function Page() {
//   return (
//     <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
//       <BarChart accessibilityLayer data={chartData}>
//         <CartesianGrid vertical={false} />
//         <XAxis
//           dataKey="month"
//           tickLine={false}
//           tickMargin={10}
//           axisLine={false}
//           tickFormatter={(value) => value.slice(0, 3)}
//         />
//         <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
//         <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
//       </BarChart>
//     </ChartContainer>
//   )
// }
"use client"

import * as React from "react"
import { useState, useEffect } from 'react'
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, Label, Pie, PieChart } from "recharts"
import { ChartData } from '@/app/lib/definitions';
import { fetchChartData } from '@/app/api'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]

const data = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
  visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export default function Page() {

  const [chartData, setChartData] = useState<ChartData>();

    useEffect(() => {
      fetch('/api')
        .then((response) => response.json())
        .then((data) => {
          setChartData(data.data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

  const totalVisitors = React.useMemo(() => {
      return data.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [])


  console.log(chartData)
  return (
    <>
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>

    <Card className="flex flex-col min-h-[200px] w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
    </>

  )
}





