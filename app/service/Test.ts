import BaseService from './Base';

/**
 * Test Service
 */
export default class Test extends BaseService {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return new Promise((resolve, reject) => {
      this.pool.query('SELECT * FROM user', function(err, rows, fields) {
        // Connection is automatically released when query resolves
        console.log('err', err, 'rows', rows, 'xx', fields, name);
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
    // return `hi, ${name}`;
  }
}
