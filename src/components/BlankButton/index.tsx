/**
 * @description: 新页签打开链接
 * @param {React.ReactNode} children - 按钮内容
 * @param {string} type - Antd 的 Button 组件的默认 Type 属性
 * @param {string} targetType - 目标类型
 * @param {string} id - 下载文件的 id
 * @param {string} target - 要打开的目标链接
 * @param {string} password - 下载文件的访问密码
 * @return {React.ReactNode}
 */

import React, { useEffect, useState } from "react";
import { Button, ButtonProps } from "antd";
import AntdConfigProvider from "../Provider/AntdConfigProvider";

interface Props {
  children: React.ReactNode;
  /** Antd 的 Button 组件的默认 Type 属性 */
  type?: ButtonProps["type"];
  /** download - 下载页面 | security - 安全中心 */
  targetType: "download" | "security";
  /** 下载文件的 id */
  id?: string;
  /** 要打开的目标链接 */
  target?: string;
  /** 下载文件的访问密码 */
  password?: string;
  /** 主题 */
  theme?: "light" | "dark";
}

const BlankButton: React.FC<Props> = (props) => {
  const { children, targetType } = props;

  const [href, setHref] = useState(undefined);

  // 根据 `id` 或 `target` 生成 `href`
  function generateHref() {
    // 如果 `id` 和 `target` 都没有提供，什么也不做
    if (!props.id && !props.target) {
      return;
    }

    const { id, target } = props;
    let url = "";

    switch (targetType) {
      // 如果提供了 `id`，使用 `/download` 下载文件
      case "download":
        url = `/download?id=${id}&password=${props?.password || '6262'}`;
        break;
      // 如果提供了 `target`，使用 `/security` 打开目标链接
      case "security":
        url = `/security?target=${target}`;
        break;
      default:
        url = target;
        break;
    }

    setHref(url);
  }

  useEffect(() => {
    generateHref();
  }, []);

  return (
    <AntdConfigProvider theme={props?.theme}>
      <Button type={props?.type || "primary"} href={href} target="_blank">
        {children}
      </Button>
    </AntdConfigProvider>
  );
};

export default BlankButton;
