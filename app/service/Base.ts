import { Service } from 'egg';

/**
 * Base Service
 */
export default class Base extends Service {
  // 连接池alias
  pool: IMysql.IPool = this.app.getPool();
}
