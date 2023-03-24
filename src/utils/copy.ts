/**
 * 复制文本
 * @param text 要复制的字符串
 * @returns {string} 复制文本成功后返回的字符串消息
 */
async function copyText(text: string): Promise<string> {
  await navigator.clipboard.writeText(text);
  return "复制成功";
}

export default copyText;
