import BaseService from './Base';

/**
 * Test Service
 */
export default class Test extends BaseService {

  /**
   * sayHi to you
   */
  public sayHi() {
    return new Promise((resolve, reject) => {
      this.pool.query('SELECT * FROM user', function(err, rows) {
        // Connection is automatically released when query resolves
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}
