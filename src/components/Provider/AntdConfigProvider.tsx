import React from 'react'
import { ConfigProvider } from "antd"

interface Props {
  children: React.ReactNode;
}

const AntdConfigProvider: React.FC<Props> = (props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      {props.children}
    </ConfigProvider>
  );
}

export default AntdConfigProvider