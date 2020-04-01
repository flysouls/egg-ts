import * as mysql from 'mysql2';

// mysql 实例
export default class SqlClient {
  // 连接池
  pool: IMysql.IPool;
  // 应用实例
  app: IApp;

  /**
   * log
   */
  public log(...args) {
    this.app.logger.log(...args);
  }

  /**
   * init
   * @param app application实例
   */
  init(app) {
    this.app = app;
    try {
      this.pool = mysql.createPool(app.config.mysql);
      this.log('INFO', [ '数据库连接成功' ], {});
    } catch (err) {
      this.log('ERROR', [ '数据库连接成功', app.config.mysql ], err);
    }
  }

  /**
   * getPool
   */
  public getPool(app?) {
    if (!this.pool) {
      this.init(app);
    }
    this.log('INFO', [ 'getPool', 123123 ], {});
    return this.pool;
  }

  /**
   * getPromisePool
   */
  public getPromisePool() {
    return this.pool.promise();
  }

  /**
   * close
   */
  public close(cb?) {
    this.pool.end(cb);
  }

}
