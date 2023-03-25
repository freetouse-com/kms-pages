interface ReturnVal {
  uuid?: string;
  target?: string;
}

/**
 * 将地址栏的参数字符串转换为对象
 * @param searchQuery 地址栏参数字符串，形如：`?uuid=xxxx-xxx&target=https://www.baidu.com`
 * @returns {ReturnVal} 地址栏参数字符串转换成的对象
 */
const searchQueryToObject = (searchQuery?: string): ReturnVal => {
  if (!searchQuery) return {}
  const searchQueries = searchQuery.split('?')[1].split('&')
  const obj = {}
  searchQueries.forEach(query => {
    const key = query?.split('=')[0]
    const val = query?.split('=')[1]
    obj[key] = val;
  })
  return obj;
};

export default searchQueryToObject;
