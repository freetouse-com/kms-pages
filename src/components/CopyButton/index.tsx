/**
 * @name 复制按钮
 * @description 复制文本成功后，会将文本写入到剪切板，同时弹出`复制成功`的消息。
 */

import React, { useRef } from "react";
import { Button, Input, message } from "antd";

import { copyText } from "@site/src/utils";

interface CopyButton {
  text: string;
}

const CopyButton: React.FC<CopyButton> = ({ text }) => {
  const inputRef = useRef(null);

  return (
    <>
      <Input
        type="text"
        value={text}
        ref={inputRef}
        style={{ display: "none" }}
      />
      <Button
        type="primary"
        style={{ backgroundColor: "#25c2a0" }}
        onClick={async () => message.success(await copyText(text))}
      >
        复制秘钥
      </Button>
    </>
  );
};

export default CopyButton;
