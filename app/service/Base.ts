import { Service } from 'egg';
import * as mysql from 'mysql2';

/**
 * Base Service
 */
export default class Base extends Service {
  public pool: mysql.pool;

  constructor(config) {
    super(config);
    // 初始化连接池
    console.log('1111', mysql);
    this.pool = mysql.createPool(this.app.config.mysql);
  }
}
