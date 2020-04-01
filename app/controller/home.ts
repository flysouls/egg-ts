import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.app.logger.log('INFO', [ 'sayHi' ], {});
    ctx.body = await ctx.service.test.sayHi();
  }

  public async addUser() {
    const { ctx } = this;
    const query = ctx.request.query;
    const body = ctx.request.body;
    ctx.app.logger.log('INFO', [ query, body ], {});
    ctx.body = await ctx.service.user.addUser(query);
  }

  public async delUser() {
    const { ctx } = this;
    const query = ctx.request.query;
    ctx.app.logger.log('INFO', [ query ], {});
    ctx.body = await ctx.service.user.delUser(query);
  }

  public async updataUser() {
    const { ctx } = this;
    const query = ctx.request.query;
    ctx.app.logger.log('INFO', [ query ], {});
    ctx.body = await ctx.service.user.updataUser(query);
  }

  public async queryUser() {
    const { ctx } = this;
    ctx.app.logger.log('INFO', [ 'query user' ], {});
    ctx.body = await ctx.service.user.queryUser();
  }

  public async getHome() {
    console.log(123);
    this.ctx.app.logger.log('INFO', [ 'getHome' ], {});
    return await this.ctx.render('pages/home');
  }
}
