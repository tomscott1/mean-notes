angular.module('TestApp', []);  // sets new module which is in <head> tag in index.ejs - array is dependent modules

angular.module('TestApp')
  .controller('MainController', ctrlFunc);

  function ctrlFunc() {
    this.message = 'Hello';

    this.people = [
      {
        name: 'John'
      },
      {
        name: 'Jane'
      },
      {
        name: 'Jim'
      }
    ]
  }
