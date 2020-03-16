/**
 * UserService
 */
import BaseService from './Base';

const tableName = 'user';

export default class User extends BaseService {
  /**
   * add user
   */
  async addUser(param) {
    const { name = '张三', password = 'mimamima', description = '这个人很懒，什么也没留下' } = param;
    console.log(param,
      `
        INSERT INTO ${tableName} ( name, password, description )
        VALUES
        ( "${name}", "${password}", "${description}" );
      `);
    return new Promise((resolve, reject) => {
      this.pool.query(
        `
          INSERT INTO ${tableName} ( name, password, description )
          VALUES
          ( "${name}", "${password}", "${description}" );
        `,
        function(err, rows) {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
    });
  }

  /**
   * query user
   */
  async queryUser() {
    return new Promise((resolve, reject) => {
      this.pool.query(`SELECT * FROM ${tableName}`, function(err, rows) {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  /**
   * delete user
   */
  async delUser(param) {
    const { id } = param;
    return new Promise((resolve, reject) => {
      if (!id) {
        reject(new Error('id不存在'));
      }
      this.pool.query(
        `DELETE FROM ${tableName} where id=${+id}`,
        function(err, rows) {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
    });
  }

  /**
   * updata user
   */
  async updataUser(param) {
    const { id, name = '张三', password = 'mimamima', description = '这个人很懒，什么也没留下' } = param;
    return new Promise((resolve, reject) => {
      if (!id) {
        reject(new Error('id不存在'));
      }
      this.pool.query(
        `
          UPDATE ${tableName} SET name="${name}", password="${password}", description="${description}" WHERE id=${+id}
        `,
        function(err, rows) {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
    });
  }

}
