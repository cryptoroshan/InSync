import { useEffect } from "react";
import ApexCharts from "apexcharts";
import clsx from "clsx";

import photoImage from "./assets/photo.jpg";

function App() {
  useEffect(() => {
    if (
      document.getElementById("column-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("column-chart"),
        getChartOptions()
      );
      chart.render();
    }
  }, []);

  const getChartOptions = () => {
    return {
      chart: {
        height: "600px",
        maxWidth: "100%",
        type: "bar",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          borderRadiusApplication: "end",
          borderRadius: 5,
          dataLabels: {
            position: 'top'
          }
        },
      },
      tooltip: {
        enabled: false,
        x: {
          show: false,
        },
        y: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: undefined,
        formatter: function(value) {
          return value
        },
        distributed: false,
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: "14px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: "bold",
          colors: ['#fff'],
        },
      },
      grid: {
        show: true,
      },
      series: [
        {
          name: "",
          type: "column",
          // data: [8, 27, 18, 10, 14, 27, 9, 15, 18, 18],
          data: [
            {
              x: "02.14",
              y: 8
            },
            {
              x: "02.16",
              y: 27
            },
            {
              x: "02.26",
              y: 18
            },
            {
              x: "03.01",
              y: 10
            },
            {
              x: "03.03",
              y: 14
            },
            {
              x: "03.05",
              y: 27
            },
            {
              x: "03.07",
              y: 9
            },
            {
              x: "03.07",
              y: 15
            },
            {
              x: "03.10",
              y: 18
            },
            {
              x: "03.12",
              y: 18
            }
          ],
          color: "#2F78EE",
        }
      ],
      legend: {
        show: true,
      },
      stroke: {
        width: [0, 3],
      },
      xaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-sm font-normal",
            colors: [
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
            ],
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          align: "left",
          minWidth: 0,
          maxWidth: 160,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-sm font-normal",
            colors: [
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
            ],
          },
          offsetX: -10,
          offsetY: 5
        },
      },
    };
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-12 xl:max-w-[90vw] 2xl:max-w-[80vw] mx-auto">
        <div className="flex gap-12">
          <img className="h-[600px]" src={photoImage} />
          <div className="flex flex-col gap-4 w-full py-8">
            <p className="text-4xl text-white font-semibold">
              {accountData.name}
            </p>
            <div className="flex gap-4 px-2 py-4 border-y-2 border-gray-600 text-base font-semibold text-white">
              <p>{accountData.mid}</p>
              <p>{accountData.rank}</p>
              <p>{accountData.age + " years"}</p>
            </div>
            <div className="flex flex-col gap-4 py-8">
              {accountData.attribute.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 text-white"
                  >
                    <p className="w-20 text-end">{item.key}</p>
                    <div className="w-full">
                      <div
                        className={clsx(
                          "py-3 px-2 text-base font-medium text-end leading-none",
                          index % 2 === 0
                            ? "bg-blue-600 text-white"
                            : "bg-white text-black"
                        )}
                        style={{ width: `${(item.value / 2) * 100}%` }}
                      >
                        {item.value.toFixed(2)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="py-16" id="column-chart"></div>
      </div>
    </div>
  );
}

export default App;

const accountData = {
  name: "FAKER",
  mid: "FAKER (MID)",
  rank: "Top 20 (#5)",
  age: 27,
  attribute: [
    {
      key: "Rating 2.0",
      value: 1.19,
    },
    {
      key: "DPR",
      value: 1.1,
    },
    {
      key: "KAST",
      value: 1.26,
    },
    {
      key: "Impact",
      value: 1.02,
    },
    {
      key: "ADR",
      value: 1.1,
    },
    {
      key: "KPR",
      value: 0.86,
    },
  ],
};
