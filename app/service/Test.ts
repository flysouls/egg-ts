import BaseService from './Base';

/**
 * Test Service
 */
export default class Test extends BaseService {

  /**
   * sayHi to you
   */
  public sayHi() {
    return 'hi, egg';
  }
}
