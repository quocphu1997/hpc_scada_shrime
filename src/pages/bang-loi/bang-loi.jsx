import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import moment from "moment/moment";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";

export default function BangLoi() {
  const data = [
    {
      key: "1",
      name: "Motor",
      maLoi: 325643,
      khuVuc: "Bơm đầu vào",
      ngayGio: moment(Date()).format("DD/MM/YYYY hh:mm:ss"),
    },
    {
      key: "2",
      name: "Van input",
      maLoi: 423212,
      khuVuc: "Bộ lọc",
      ngayGio: moment(Date()).format("DD/MM/YYYY hh:mm:ss"),
    },
    {
      key: "3",
      name: "Van output",
      maLoi: 32123,
      khuVuc: "Bộ lọc",
      ngayGio: moment(Date()).format("DD/MM/YYYY hh:mm:ss"),
    },
    {
      key: "4",
      name: "Cảnh báo mức cao",
      maLoi: 321231,
      khuVuc: "Bể nuôi 4",
      ngayGio: moment(Date()).format("DD/MM/YYYY hh:mm:ss"),
    },
  ];
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Thiết bị",
      dataIndex: "name",
      key: "name",
      width: "20%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Mã lỗi",
      dataIndex: "maLoi",
      key: "maLoi",
      width: "15%",
      ...getColumnSearchProps("maLoi"),
    },
    {
      title: "Khu vực",
      dataIndex: "khuVuc",
      key: "khuVuc",
      ...getColumnSearchProps("khuVuc"),
      sorter: (a, b) => a.khuVuc.length - b.khuVuc.length,
      sortDirections: ["ascend"],
    },
    {
      title: "Ngày giờ",
      dataIndex: "ngayGio",
      key: "ngayGio",
      width: "25%",
      // ...getColumnSearchProps("ngayGio"),
    },
    {
      title: "Sữa lỗi nhanh",
      dataIndex: "suaLoiNhanh",
      key: "age",
      width: "15%",
      render: () => {
        return <a href="#">Xem chi tiết</a>;
      },
      // ...getColumnSearchProps("age"),
    },
  ];
  return (
    <div className="p-10 h-full">
      <div className="p-5">
        <button>Xuất báo cáo</button>
      </div>
      <div className="flex justify-center items-center">
        <Table className="flex-1 " columns={columns} dataSource={data} />
      </div>
    </div>
  );
}
