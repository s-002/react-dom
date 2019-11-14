import request from '../utils/request';

export function goList() {
  return request('/api/main/govList');
}
export default goList