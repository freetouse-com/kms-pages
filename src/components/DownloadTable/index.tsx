/**
 * @description 下载表格组件
 * @file DownloadTable/index.tsx
 * @returns {React.ReactNode}
 */

import React from "react";
import { Descriptions, Table } from "antd";

import dataSources from "./dataSources";
import BlankButton from "../BlankButton";

import styles from './index.module.css'

interface Props {
  type: "WINDOWS_11";
}

const DownloadTable: React.FC<Props> = (props) => {
  const { type } = props;

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
          <BlankButton id={record.id} targetType="download" target={record.file}>
            下载
          </BlankButton>
        );
      },
    },
  ];

  const dataSource = dataSources[type].value;

  return (
    <Table
      size="small"
      key="name"
      rowKey="name"
      pagination={false}
      columns={columns}
      dataSource={dataSource}
      scroll={{x: 780}}
      expandable={{
        expandedRowRender: (record) => (
          <div className={styles.para}>
            <p>文件名：{record.fileName}</p>
            <p>文件大小：{record.size}</p>
            <p>MD5：{record.md5}</p>
            <p>SHA1：{record.sha1}</p>
            <p>SHA256：{record.sha256}</p>
          </div>
        ),
        rowExpandable: (record) => record.name !== "Not Expandable",
      }}
    />
  );
};

export default DownloadTable;
