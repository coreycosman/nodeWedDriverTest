const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;
// const test = require('selenium-webdriver/testing')
// var driver = new webdriver.Builder().forBrowser('firefox').build();
// driver.get('http://www.google.com');
// driver.findElement(webdriver.By.name('q')).sendKeys('simple programmer');
// driver.findElement(webdriver.By.name('btnG')).click();
// driver.quit();

//   var driver = new webdriver.Builder().forBrowser('firefox').build();
//   driver.get('http://localhost:3000')
//
//   var test =  driver.getTitle().then((title) => {
//     return title
//   })
//
//
// debugger

describe('Google Search', () => {
  var driver;
  beforeEach(() => {
    driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();
    driver.get('http://www.google.com')
  });
  afterEach(() => {
  	driver.quit();
  })

  it('should work', () => {
    // debugger
    var element = driver.findElement(webdriver.By.name('q'));
    element.then((res) =>{
      expect(element).equal('q')
    });
  });
    // var searchBox = driver.findElement(webdriver.By.name('q'));
    // searchBox.sendKeys('simple programmer');
    // searchBox.getAttribute('value').then(function(value) {
    //   expect.equal(value, 'simple programmer');
    // });
});
  // var driver;
  //
  // describe('test', () => {
  //   beforeEach(() => {
  //     driver = new webdriver.Builder()
  //     .forBrowser('firefox')
  //     .build();
  //     driver.get('http://www.google.com');
  //     driver.findElement(webdriver.By.name('q')).sendKeys('simple programmer');
  //   });
  //   afterEach(() => {
  //   	driver.quit();
  //   })
  //
  //   it('test', () => {
  //     expect(newTest).equal('hello' )
  //   });
  // });
// describe('test', () => {
//   it('testTest', (done) => {
//     driver.get('http://localhost:3000')
//     .expect()
//   });
// });
// const wdio = require('webdriverio');
// const wdioOptions = require('../../wdio.conf.js');
// const browser = wdio
// const client = browser.remote(wdioOptions);
// const request = require('supertest');
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../../server/server.js').app;
//
// chai.use(chaiHttp);
// var expect = chai.expect
//
// // describe('test', () => {
// //   it('test', (done) => {
// //     request(app)
// //     .get('/')
// //     .expect((req, res) => {
// //       expect.equal(res, 404)
// //     });
// //   });
// // });
//
// describe('test', () => {
//   it('testTest', () => {
//     request(app)
//     .get('/')
//     .expect((req, res) => {
//       expect(res).equal(404);
//     })
//     .end((err, res) => {
//       done();
//     });
//   });
// });
// // describe('root url', () => {
// //   it('should return response', (done) => {
// //     request(app)
// //     .get('/')
// //     .expect((req, res) => {
// //       expect(res).equal('hello')
// //     })
// //     .end((err, res) => {
// //       done();
// //     });
// //   });
// // });
// debugger
// describe('connection', () => {
// 	it('should show title', () => {
// 	  var title = client.getTitle();
//     expect(title).equal('WebdriverIO - Selenium 2.0 javascript bindings for node.js')
// 	});
// });
