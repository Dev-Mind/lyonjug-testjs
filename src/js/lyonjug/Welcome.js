/**
 * This class should be tested
 */
export class Welcome {

  constructor(userService) {
    this.userService = userService;
  }

  sayHello(name) {
    if (!name) {
      return 'Who are you ?';
    }

    try {
      let badge = this.userService.getBadge(name);
      return `Hello ${name}, your badge number is ${badge}`;
    }
    catch (e) {
      return 'Error occurred';
    }
  }

  sayGoodbye(name) {
    if (!name) {
      return 'Goodbye !'
    }
    return 'Goodbye ' + name;
  }

}