/**
 * @description GVLK 表格组件
 */

import React from "react";
import { Table } from "antd";

import CopyButton from "../CopyButton";
import dataSources from "./dataSources";

interface Props {
  type:
    | "WINDOWS_SERVER_2022"
    | "WINDOWS_SERVER_2019"
    | "WINDOWS_SERVER_2016"
    | "WINDOWS_SERVER_20H2_2004_1909_1809"
    | "WINDOWS_11_10"
    | "WINDOWS_10_LTSC_2021_2019"
    | "WINDOWS_10_LTSB_2016"
    | "WINDOWS_10_LTSB_2015"
    | "WINDOWS_SERVER_1803"
    | "WINDOWS_SERVER_1709"
    | "WINDOWS_SERVER_2012_R2"
    | "WINDOWS_SERVER_2012"
    | "WINDOWS_SERVER_2008_R2"
    | "WINDOWS_SERVER_2008"
    | "WINDOWS_8.1"
    | "WINDOWS_8"
    | "WINDOWS_7"
    | "WINDOWS_VISTA";
}

const GVLKTable: React.FC<Props> = (props) => {
  const { type } = props;

  const columns = [
    {
      title: "操作系统版本 ",
      dataIndex: "version",
      width: 330,
      render: (_: string) => _,
    },
    {
      title: "KMS 客户端产品密钥 ",
      dataIndex: "key",
      width: 300,
      render: (_: string) => _,
    },
    {
      title: "操作",
      dataIndex: "operation",
      width: 110,
      render: (_: string, record: any) => {
        return <CopyButton text={record.key} />;
      },
    },
  ];

  return (
    <Table
      size="middle"
      key="version"
      rowKey="version"
      pagination={false}
      columns={columns}
      scroll={{ x: 734 }}
      dataSource={dataSources[type].value}
    />
  );
};

export default GVLKTable;
