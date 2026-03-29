"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SaleStatistics: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"week" | "month" | "year">("week");

    const baseOptions: ApexOptions = {
        chart: {
            fontFamily: "Jost, sans-serif",
            height: 430,
            type: "line",
            toolbar: { show: false },
            zoom: { autoScaleYaxis: true },
        },
        xaxis: {
            type: "category",
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
            axisBorder: { show: true },
            axisTicks: { show: true },
            crosshairs: { show: true },
        },
        yaxis: {
            min: 0,
            max: 75,
            tickAmount: 5,
            show: false,
            labels: { offsetX: -10 },
        },
        stroke: { width: [3, 3, 3], curve: "straight" },
        colors: ["#629D23", "#455A3F", "#FF965D"],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 60],
            },
        },
        legend: {
            show: true,
            position: "top",
            horizontalAlign: "left",
        },
        tooltip: {
            enabled: true,
            custom: function (opts) {
                const { seriesIndex, dataPointIndex, w } = opts as {
                    seriesIndex: number;
                    dataPointIndex: number;
                    w: { globals: { series: number[][]; seriesNames: string[] } };
                };
                return `<div class="custom-tooltip">
          <span class="custom-tooltip__title">${w.globals.series[seriesIndex][dataPointIndex]} Sales</span>
          <span class="custom-tooltip__subtitle">From ${w.globals.seriesNames[seriesIndex]}</span>
        </div>`;
            },
        },
        grid: {
            show: true,
            xaxis: { lines: { show: true } },
            yaxis: { lines: { show: false } },
            column: { opacity: 0.2 },
        },
        dataLabels: { enabled: false },
    };

    const chartData = {
        week: {
            series: [
                { name: "Sales", data: [23, 11, 22, 27, 13, 22, 37, 21, 44] },
                { name: "Visitors", data: [30, 25, 36, 30, 45, 35, 64, 52, 59] },
                { name: "Products", data: [15, 35, 15, 45, 35, 65, 10, 44, 5] },
            ],
            options: { ...baseOptions, chart: { ...baseOptions.chart, height: 430 } },
        },
        month: {
            series: [
                { name: "Sales", data: [33, 21, 30, 25, 45, 32, 52, 40, 50] },
                { name: "Visitors", data: [40, 35, 46, 40, 55, 45, 74, 62, 69] },
                { name: "Products", data: [25, 45, 25, 55, 45, 75, 20, 54, 15] },
            ],
            options: { ...baseOptions, chart: { ...baseOptions.chart, height: 430 } },
        },
        year: {
            series: [
                { name: "Sales", data: [60, 50, 45, 70, 45, 35, 42, 40, 60] },
                { name: "Visitors", data: [45, 65, 60, 35, 45, 62, 32, 24, 60] },
                { name: "Products", data: [25, 60, 55, 65, 60, 20, 70, 20, 60] },
            ],
            options: { ...baseOptions, chart: { ...baseOptions.chart, height: 430 } },
        },
    };

    return (
            <div className="col-xl-7 col-lg-12">
                <div className="apex-xhart-area-one">
                    <div className="apex-chart-top-area-banner mb--20">
                        <div className="left-area">
                            <h1 className="title-top mb--10">Sale Statistics</h1>
                            <span>Top traffic channels metrics.</span>
                        </div>
                        <div className="right-area sale-statictics-button">
                            <ul className="nav nav-tabs" role="tablist">
                                {(["week", "month", "year"] as const).map((type) => (
                                    <li className="nav-item" key={type}>
                                        <button
                                            className={`nav-link ${activeTab === type ? "active" : ""}`}
                                            onClick={() => setActiveTab(type)}
                                            type="button"
                                        >
                                            {type.charAt(0).toUpperCase() + type.slice(1)}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="tab-content">
                        <Chart
                            options={chartData[activeTab].options}
                            series={chartData[activeTab].series}
                            type="line"
                            height={chartData[activeTab].options.chart?.height ?? 430}
                        />
                    </div>
                </div>
            </div>
    );
};

export default SaleStatistics;
