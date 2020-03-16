import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/add-user', controller.home.addUser);
  router.get('/del-user', controller.home.delUser);
  router.get('/updata-user', controller.home.updataUser);
  router.get('/query-user', controller.home.queryUser);
};
