const {Builder,By ,Key}= require('selenium-webdriver');
// Diiferent assert
const assert = require('assert');
const should = require('chai').should();
const expect = require('chai').expect;

//Mocha
 describe('Add a todo to Lambdatest sample app',() =>{
 
    it('Successfully adds a todo',async () =>{
        // Start webdriver and go to page 
        let driver = await new Builder().forBrowser('firefox').build();
        await driver.get('http://lambdatest.github.io/sample-todo-app/');

        //await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium',Key.ENTER);
        await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium');
        await driver.findElement(By.css('#addbutton')).click();

        // Find what we just put into the list
        let todoText = await driver.findElement(By.css('li:last-child')).getText();

        let items = await driver.findElements(By.css('li'));
        let thirdItemtext = await items[2].getText();
        thirdItemtext.should.equal('Third');

        console.log(thirdItemtext);

        // Asserts
        assert.equal(todoText, 'Learn Selenium'); // Builtin Node
        expect(todoText).to.equal('Learn Selenium'); // chai should
        todoText.should.equal('Learn Selenium'); // chai should

        // Close browser and exit Selenium 
        await driver.quit();

    });

    it('this test should be pending');



 });

 