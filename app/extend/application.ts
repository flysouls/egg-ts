// 扩展app
import SqlClient from '../utils/sql_client';
const client = new SqlClient();

export default {
  // 获取连接池
  getPool() {
    return client.getPool(this);
  },
  // 断开连接池
  closePool(cb?) {
    return client.close(cb);
  },
};
