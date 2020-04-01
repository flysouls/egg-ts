import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1584285329119_8980';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.mysql = {
    host: 'localhost',
    user: 'root',
    database: 'youzanyun',
    password: 'wodeMYSQLmima',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  };

  // view
  config.view = {
    defaultExtension: '.njk',
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.njk': 'nunjucks',
    },
    root: [
      path.join(appInfo.baseDir, 'app/view'),
      // path.join(appInfo.baseDir, 'path/to/another'),
    ].join(','),
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
