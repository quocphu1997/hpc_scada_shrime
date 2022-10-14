import React from "react";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { DatePicker, Space } from "antd";
import moment from "moment";
import "./solieu.scss";

export default function SoLieu() {
  const { RangePicker } = DatePicker;
  const dateFormat = "DD/MM/YYYY";
  const onChangeDateTemp = (date, dateString) => {
    console.log('temp',date, dateString);
  };
  const onChangeDateOxy = (date, dateString) => {
    console.log('oxy',date, dateString);
  };
  const optionTemp = {
    chart: {
      height: "auto",
      type: "area",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
        zoom: {
          enabled: true,
          type: "x",
          autoScaleYaxis: true,
          zoomedArea: {
            fill: {
              color: "#90CAF9",
              opacity: 0.4,
            },
            stroke: {
              color: "#0D47A1",
              opacity: 0.4,
              width: 1,
            },
          },
        },
      },
      toolbar: {
        show: true,
        tools: {
          download: true,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
        },
        export: {
          csv: {
            filename: "baocaoNhietdo",
            columnDelimiter: ",",
            headerCategory: "category",
            headerValue: "value",
            dateFormatter(timestamp) {
              return new Date(timestamp).toDateString();
            },
          },
        },
      },
    },
    colors: ["#77B6EA", "#545454"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Nhiệt độ (℃)",
      align: "left",
      offsetY: 15,
      style: {
        fontFamily: '"Roboto", sans-serif',
        fontSize: "1rem",
      },
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      tickPlacement: "on",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: {
        text: "Ngày",
        style: {
          fontFamily: '"Roboto", sans-serif',
          fontSize: "1rem",
        },
      },
    },
    yaxis: {
      // title: {
      //   text: "℃",
      //   style: {
      //     fontFamily: '"Roboto", sans-serif',
      //     fontSize: "1.4rem",
      //   },
      // },
      min: 5,
      max: 45,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  };
  const optionOxy = {
    chart: {
      height: 350,
      type: "area",
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: true,
        tools: {
          download: true,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
        },
        export: {
          csv: {
            filename: "baocaoOxy",
            columnDelimiter: ",",
            headerCategory: "category",
            headerValue: "value",
            dateFormatter(timestamp) {
              return new Date(timestamp).toDateString();
            },
          },
        },
      },
    },
    colors: ["#77B6EA", "#545454"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Oxygen (Mg/l)",
      align: "left",
      offsetY: 15,
      style: {
        fontFamily: '"Roboto", sans-serif',
        fontSize: "1rem",
      },
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      tickPlacement: "on",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: {
        text: "Ngày",
        style: {
          fontFamily: '"Roboto", sans-serif',
          fontSize: "1rem",
        },
      },
    },
    yaxis: {
      // title: {
      //   text: "℃",
      //   style: {
      //     fontFamily: '"Roboto", sans-serif',
      //     fontSize: "1.4rem",
      //   },
      // },
      min: 5,
      max: 45,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  };
  //
  const seriesTemp = [
    {
      name: "℃",
      data: [28, 29, 33, 36, 32, 32, 10],
    },
  ];
  const seriesOxy = [
    {
      name: "Mg/l",
      data: [28, 29, 33, 36, 32, 32, 10],
    },
  ];

  return (
    <>
      <div className=" mx-auto wrapper-solieu">
        <div className="p-10">
          <div className="p-3">
            <h4>Chọn ngày thống kê</h4>
            <Space direction="vertical" size={12}>
              <RangePicker format={dateFormat} onChange={onChangeDateTemp} />
            </Space>
          </div>
          <ReactApexChart
            options={optionTemp}
            series={seriesTemp}
            width="100%"
            type="area"
          />
          <div className="p-3">
            <h4>Chọn ngày thống kê</h4>
            <Space direction="vertical" size={12}>
              <RangePicker format={dateFormat} onChange={onChangeDateOxy} />
            </Space>
          </div>
          <ReactApexChart
            options={optionOxy}
            series={seriesOxy}
            width="100%"
            type="area"
          />
        </div>
      </div>
    </>
  );
}
