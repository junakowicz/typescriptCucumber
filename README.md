## Setup 

For this project should be enough to run

```$ npm i```

###More general solution

```$ npm install -g cucumber```

Install as a development dependency of your application with:

```$ npm install --save-dev cucumber```

To use with Typescript transpiler

```$ npm install -g ts-node```
 
Install a TypeScript compiler (requires `typescript` by default). 

```$ npm install -g typescript```


##Time to BDD (Behaviour Driven Development) with cucumber

In really, really short ...

Feature stories written in [Gherkin]( http://docs.behat.org/en/v3.0/guides/1.gherkin.html) are **THE SOURCE**.

Features should be written in a meeting called "Three Amigos" - **business** person, a **developer** and a **tester**

This allows to get better understanding of requests, expectations and problems. 
All Amigos have immediate view of the situation and can act accordingly.

 > "real friends tell you that you are wrong"

Some of the benefits of BDD
___
- feature stories propagate throughout whole company
- helps to develop ubiquitous language
- better understanding for all parties
- lovers cost and time of development - less changes are made due to misunderstandings 

more about BDD 

- [THE BEGINNER'S GUIDE TO BDD](http://inviqa.com/insights/bdd-guide)
- [GENERAL INTRO](https://semaphoreci.com/community/tutorials/behavior-driven-development)

Some of the benefits of BDD with Cucumber
___
- helps/forces to write tested code
- better predictions of know and unknown "knowns"
- easier test automation
- easy to spot feature changes as tests will brake

more about CUCUMBER 

- [CUCUMBER DOCS](https://cucumber.io/docs/reference)
- [SHORT INTRO](http://www.methodsandtools.com/tools/cucumber.php)

---

##Quick start

###Get features

Use [Gherkin]( http://docs.behat.org/en/v3.0/guides/1.gherkin.html) syntax to define them.

put them in your project (by default to the ```features``` dir) and run cucumber

    features/my_feature.feature

### run CUCUMBER
```$ cucumber.js```

on Windows 

```$ cucumber-js``` 

##Add typescript support
To use Typescript transpiler 

```
npm i ts-node

cucumber-js --compiler ts:ts-node/register
```

In console output you should see snippets of steps.

ex.
```
1) Scenario: Collect any unlicensed dog from the street - features\collect-dogs.feature:8
   Step: Given there are animals on the street - features\collect-dogs.feature:9
   Message:
     Undefined. Implement with the following snippet:

       this.Given(/^there are animals on the street$/, function (table, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });
```

Use generated Step definitions snippets as a guide for writing your tests.

**Step definitions** - place where you will put your test code

Default dir and naming for step definitions:

    features\step_definitions\my_feature.steps.ts

template for ts files

```
declare var module: any;
module.exports = function () {
  this.Given(/.*/, function () {
    // ...your test code with assertions and expectations
  })
}
```
Pick your favorite assertion library and you are ready to go !

You can use TDD approach to implement your new feature or cover existing code with tests.