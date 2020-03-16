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
    try {
      this.pool = mysql.createPool(this.app.config.mysql);
      this.app.logger.log('INFO', [ '数据库连接成功' ], {});
    } catch (err) {
      this.app.logger.log('ERROR', [ this.app.config.mysql ], err);
    }
  }
}
