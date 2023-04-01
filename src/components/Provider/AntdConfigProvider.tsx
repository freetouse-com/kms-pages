import React from "react";
import { ConfigProvider, theme } from "antd";

import type { ThemeConfig } from "antd";

interface Props {
  theme?: "light" | "dark";
  children: React.ReactNode;
}

const AntdConfigProvider: React.FC<Props> = (props) => {
  const antdTheme: ThemeConfig = {
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: "#00b96b",
    },
  };

  if (props?.theme !== "dark") delete antdTheme.algorithm;

  return <ConfigProvider theme={antdTheme}>{props.children}</ConfigProvider>;
};

export default AntdConfigProvider;
