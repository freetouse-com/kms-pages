/**
 * @description 下载表格组件
 * @file DownloadTable/index.tsx
 * @returns {React.ReactNode}
 */

import React from "react";
import { ConfigProvider, Table } from "antd";

import dataSources from "./dataSources";
import BlankButton from "../BlankButton";

import useTheme from "@site/src/hooks";

import styles from "./index.module.css";

interface Props {
  type:
    | "WINDOWS_11"
    | "WINDOWS_10"
    | "WINDOWS_8.1"
    | "WINDOWS_SERVER_2022"
    | "WINDOWS_SERVER_2019";
}

const DownloadTable: React.FC<Props> = (props) => {
  const { type } = props;

  const curTheme = useTheme();

  const columns = [
    {
      title: "文件名",
      dataIndex: "name",
      width: 700,
    },
    {
      title: "操作",
      dataIndex: "action",
      width: 80,
      render: (_: unknown, record: any) => {
        return (
          <BlankButton
            id={record.id}
            targetType="download"
            target={record.file}
            theme={curTheme}
          >
            下载
          </BlankButton>
        );
      },
    },
  ];

  const dataSource = dataSources[type].value;

  return (
    <ConfigProvider
      theme={{
        token:
          curTheme === "dark"
            ? {
                colorBgBase: "#1b1b1d",
                colorTextBase: "#fff",
                colorPrimary: "#1b1b1d",
              }
            : {},
      }}
    >
      <Table
        size="small"
        key="name"
        rowKey="name"
        pagination={false}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 780 }}
        className={styles.table}
        expandable={{
          expandedRowRender: (record) => (
            <div className={styles.para}>
              <p>文件名：{record.fileName}</p>
              <p>文件大小：{record.size}</p>
              {record?.md5 && <p>MD5：{record.md5}</p>}
              {record?.sha1 && <p>SHA1：{record.sha1}</p>}
              {record?.sha256 && <p>SHA256：{record.sha256}</p>}
            </div>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
      />
    </ConfigProvider>
  );
};

export default DownloadTable;
