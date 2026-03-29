"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";

// Client‑only Chart import (SSR disabled)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const StackedBarChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 436,
      stacked: true,
      toolbar: { show: false },
    },
    series: [
      { name: "PRODUCT A", data: [2, 5, 1, 7, 2, 4, 1, 4] },
      { name: "PRODUCT B", data: [1, 3, 2, 8, 3, 7, 3, 2] },
    ],
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      axisBorder: { show: true },
      axisTicks: { show: true },
      crosshairs: { show: true },
    },
    yaxis: {
      opposite: true,
      min: 0,
      max: 10,
      tickAmount: 5,
      labels: {
        show: false,
        formatter: (val) => `${val} AM`,
        offsetX: -17,
      },
    },
    legend: { show: false },
    grid: {
      show: false,
      padding: { left: -10, right: 0 },
    },
    dataLabels: { enabled: false },
    plotOptions: {
      bar: { columnWidth: "18%", borderRadius: 0 },
    },
    fill: { colors: ["#629D23", "#629D23"] },
    tooltip: { enabled: true },
  };

  return (
    <div className="col-xl-5 col-lg-12">
      <div className="apex-xhart-area-one">
        <div className="apex-chart-top-area-banner mb--20">
          <div className="left-area">
            <h1 className="title-top mb--10">Earnings</h1>
            <span>Top traffic channels metrics.</span>
          </div>
          <div className="single-select">
            <select className="nice-select">
              <option>Week</option>
              <option>Month</option>
              <option>Year</option>
              <option>6 Month</option>
            </select>
          </div>
        </div>

        <div id="stack-chart">
          <Chart
            options={options}
            series={options.series!}
            type="bar"
            height={options.chart?.height}
          />
        </div>
      </div>
    </div>
  );
};

export default StackedBarChart;
