/**
 * @description: 新页签打开链接
 * @param {React.ReactNode} children - 按钮内容
 * @param {string} targetType - 目标类型
 * @param {string} uuid - 下载文件的 uuid
 * @param {string} target - 要打开的目标链接
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
  /** 下载文件的 uuid */
  uuid?: string;
  /** 要打开的目标链接 */
  target?: string;
  /** 下载文件的访问密码 */
  password?: string;
}

const BlankButton: React.FC<Props> = (props) => {
  const { children, targetType } = props;

  const [href, setHref] = useState(undefined);

  // 根据 `uuid` 或 `target` 生成 `href`
  function generateHref() {
    // 如果 `uuid` 和 `target` 都没有提供，什么也不做
    if (!props.uuid && !props.target) {
      return;
    }

    const { uuid, target } = props;
    let url = "";

    switch (targetType) {
      // 如果提供了 `uuid`，使用 `/download` 下载文件
      case "download":
        url = `/download?uuid=${uuid}&password=${props?.password || '6262'}`;
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
    <AntdConfigProvider>
      <Button type={props?.type || "primary"} href={href} target="_blank">
        {children}
      </Button>
    </AntdConfigProvider>
  );
};

export default BlankButton;
