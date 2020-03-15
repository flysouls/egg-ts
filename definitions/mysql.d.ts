// 连接池
declare module mysql {
  interface pool {
    [key: string]: any;
  }
}
