import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";

export default function TraCuuBaoHanh() {
  const data = [
    {
      key: "1",
      name: "Bơm",
      thoiGianCanBaoTri: "3000 h",
    },
    {
      key: "2",
      name: "van",
      thoiGianCanBaoTri: "2000 h",
    },
    {
      key: "3",
      name: "Cảm biến oxy",
      thoiGianCanBaoTri: "8000 h",
    },
    {
      key: "4",
      name: "Cảm biến nhiệt độ",
      thoiGianCanBaoTri: "3200 h",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(
      selectedKeys[0]
    );
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
      title: "Tên thiết bị",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Thời gian cần bảo trì",
      dataIndex: "thoiGianCanBaoTri",
      key: "thoiGianCanBaoTri",
      width: "20%",
      //   ...getColumnSearchProps("age"),
    },
    // {
    //   title: "Address",
    //   dataIndex: "address",
    //   key: "address",
    //   ...getColumnSearchProps("address"),
    //   sorter: (a, b) => a.address.length - b.address.length,
    //   sortDirections: ["descend", "ascend"],
    // },
  ];
  return <Table columns={columns} dataSource={data} />;
}
