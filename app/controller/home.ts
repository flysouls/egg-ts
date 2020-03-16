import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi();
  }

  public async addUser() {
    const { ctx } = this;
    const query = ctx.request.query;
    const body = ctx.request.body;
    ctx.app.logger.log('DEBUG', [ query, body ], {});
    ctx.body = await ctx.service.user.addUser(query);
  }

  public async delUser() {
    const { ctx } = this;
    const query = ctx.request.query;
    ctx.app.logger.log('DEBUG', [ query ], {});
    ctx.body = await ctx.service.user.delUser(query);
  }

  public async updataUser() {
    const { ctx } = this;
    const query = ctx.request.query;
    ctx.app.logger.log('DEBUG', [ query ], {});
    ctx.body = await ctx.service.user.updataUser(query);
  }

  public async queryUser() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.queryUser();
  }
}
