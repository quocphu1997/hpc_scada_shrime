import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Table, Tag, Modal } from "antd";
import moment from "moment";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;
export default function CongViec() {
  const navigate = useNavigate();
  // ghi chú
  const [isModal1Open, setIsModal1Open] = useState(false);

  const showModal = () => {
    setIsModal1Open(true);
  };

  const handleOk = () => {
    setIsModal1Open(false);
  };

  const handleCancel = () => {
    setIsModal1Open(false);
  };
  // table chính
  const data = [
    {
      key: "1",
      caLam: "Ca 1",
      congViec: "AB",
      address: "New York No. 1 Lake Park",
      tag: "chuaHoanThanh",
      ngayGio: moment(Date()).format("DD/MM/YYYY hh:mm:ss"),
    },
    {
      key: "2",
      caLam: "Ca 1",
      congViec: "VFSASDA",
      address: "London No. 1 Lake Park",
      tag: "chuaHoanThanh",
      ngayGio: moment(Date()).format("DD/MM/YYYY hh:mm:ss"),
    },
    {
      key: "3",
      caLam: "Ca 2",
      congViec: "FSASDA",
      address: "Sidney No. 1 Lake Park",
      tag: "hoanThanh",
      ngayGio: moment(Date()).format("DD/MM/YYYY hh:mm:ss"),
    },
    {
      key: "4",
      caLam: "Ca 2",
      congViec: "SASDA",
      address: "London No. 2 Lake Park",
      tag: "hoanThanh",
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
      title: "STT",
      dataIndex: "key",
      width: "5%",
    },
    {
      title: "Ca làm",
      dataIndex: "caLam",
      width: "10%",
      filters: [
        {
          text: "Ca 1",
          value: "Ca 1",
        },
        {
          text: "Ca 2",
          value: "Ca 2",
        },
      ],
      onFilter: (value, record) => record.caLam.includes(value),
    },
    {
      title: "Công việc",
      dataIndex: "congViec",
      key: "congViec",
      width: "20%",
      ...getColumnSearchProps("congViec"),
    },
    {
      title: "Trạng thái",
      dataIndex: "tag",
      key: "tag",
      width: "20%",
      filters: [
        {
          text: "Chưa Hoàn Thành",
          value: "chuaHoanThanh",
        },
        {
          text: "Hoàn Thành",
          value: "hoanThanh",
        },
      ],
      onFilter: (value, record) => {
        console.log(value);
        return record.tag.includes(value);
      },
      render: (tags) => {
        let color = "";
        if (tags === "chuaHoanThanh") {
          color = "volcano";
        } else {
          color = "green";
        }
        return (
          <span>
            {
              <Tag color={color} key={tags}>
                {tags === "chuaHoanThanh" ? "Chưa Hoàn Thành" : "Hoàn Thành"}
              </Tag>
            }
          </span>
        );
      },
    },
    {
      title: "Ngày giờ",
      dataIndex: "ngayGio",
      key: "ngayGio",
      width: "20%",
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
      key: "note",
      width: "10%",
      render: () => {
        return (
          <>
            <button type="primary" onClick={showModal}>
              Ghi chú
            </button>
            <Modal
              title="Ghi chú công việc"
              open={isModal1Open}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <TextArea rows={4} />
            </Modal>
          </>
        );
      },
    },
    {
      title: "Tương tác",
      dataIndex: "tuongTac",
      key: "tuongTac",
      width: "11%",
      render: () => {
        return (
          <>
            <button className="ml-1">
              <DeleteOutlined />
            </button>
            <button className="ml-4">
              <EditOutlined />
            </button>
          </>
        );
      },
    },
  ];
  return (
    <div className="h-full pt-10 px-10">
      <button className="flex items-center py-5" onClick={() => {navigate("/themcongviec")}}>
        Thêm công việc mới{" "}
        <span className="flex items-center ml-2">
          <PlusCircleOutlined />
        </span>{" "}
      </button>

      <div className="flex justify-center items-center ">
        <Table className="flex-1" columns={columns} dataSource={data} />
      </div>
    </div>
  );
}
