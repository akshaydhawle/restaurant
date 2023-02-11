# Testing

- in manual testing we have to perform:
 - launch the app
 - login 
 - navigate
 - fill out form
 - submit it
 - and verify
each time.

- very time consuming.

- in real application , we've tons of functions.

- thats why we write automated tests.

- in this tests we write test for functions with different inputs.

- **Automated tests are repeatable**

- we can rerun this tests every time we run code or change code or commit code or before deploying your application.

- in this way we can tests all applications paths in less than second.

# benefits of automated testing.

- Test your code frequently in less time.

- mosh imp : catch the bugs before deploying.

- without this it may happen , you deployed your code came to home and boss call you something broken.

- thats why we should write tests.

- with automated tests we can certainly reduce bugs.
- and improve quality of code. 

- it also allows to refactor your software.

- Refactoring means changing the structure of the code without changing its behavior.

- whenever you don't have automated tests every time you changed your code, you've to manually test your code.

- and it's really painful
- as our app grows you'll forgot some parts to test.

- focus more on the quality of writing. you make sure every method works with different inputs.

# Types of Tests
- unit tests
- integration tests
- end to end tests

- unit tests: 
    Tests a unit of an application without its **external** dependencies

- unit tests are cheap to write and execute fast.

# Integration tests

- but without external dependencies testing not gives confidence thats where we writing integration tests.

- these tests take longer to execute since it's communicating with third party services.

- give you more confidence.

- takes few units as whole

- unit tests tests class or multiple classes without their dependencies.

- integrations tests tests class or multiple classes with their dependencies.

- end to end test drives and application through UI. eg - selenium , cypress

- very slow, because testing through UI.

- very brittle, small change in UI can easily breaks this.

# Test Pyramid (priority).
unit tests (tests edge cases) 
integration tests
e2e (only tests happy paths)

- this tests needs based on your app needs

- eg your app only does read from database and write to another db,
then this scenario you need only integration tests.

**TakeAways**
- Favour units tests to e2e tests.
- cover unit test gaps with integration tests.
- use e2e tests sparingly.

- Tool
 - it gives us library, with functionalities
 - test runner  - program to run tests 
 - it executes tests and gives us report or coverage of tests.

> JEST

- the no of test cases is depend on number of execution paths.

```js
module.exports.absolute = function(number) {
  if (number > 0) return number;  // 1 path
  if (number < 0) return -number; // 2 path
  return 0; // 3rd path
}
```

- jest has matcher functions
 - truthiness
 - numbers, floating points
 - arrays ...
```js
    expect(result).toBe(1);
```

- tests are first class citizens, they are imp as much as production code.
- group tests
- in order to organize 
- we use describe for grouping

```js
describe('absolute',()=>{
    it('should be 1',()=>{
        expect(1).toBe(1);
    })
})
```

- always group related tests inside describe block.

# Refactoring with confidence.

 ```js
 module.exports.absolute = function(number) {
  if (number >= 0) return number;  
  return -number; 
}
 ```
- test still works, after refactoring.

```js
 module.exports.absolute = function(number) {
  return (number >= 0) ? number : -number;  
}
 ```
- test still works, after refactoring.


# Testing strings

- this test is too specific
- if somebody add some text after welcome it can easily break
```js
it('should return the greeting message',()=>{
        const result = lib.greet('Mosh');
        expect(result).toBe('Welcome Mosh')
    }) 
```
- so test case should not be more specific or not too general, it should be right balance.

- how to make this test more general
- we can regular expression.

```js
it('should return the greeting message',()=>{
        const result = lib.greet('Mosh');
        expect(result).toMatch(/Mosh/);
        expect(result).toContain('Mosh');
    }) 😀;
```

- we can use another alternative, toContain

# Testing Arrays.

- too general- can easily break
```js
    expect(result).ToBeDefined();
    expect(result).not.toBeNull();
```

- too specific - if we change sorting algo , easily break
```js
    expect(result[0]).toBe('USD');
    expect(result[1]).toBe('AUD');
    expect(result[2]).toBe('EUR');
```

- testing array don't look exact location in array
- proper way to test
```js
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
```

- cleaner way / ideal way

```js
    expect(result).toEqual(expect.arrayContaining(['USD','AUD','EUR']));
```

# Testing Objects

```js
    it('should return product with given id',()=>{
        const result = lib.getProduct(1);
        expect(result).toBe({ id: 1, price: 10 })
    })
```
- this test will failed event the result are same because these two data are at different location in memory.

- toBe compares references in memory.

- use toEqual

```js
expect(result).toEqual({ id: 1, price: 10 })
```

- other matchers

```js
expect(result).toMatchObject({ id: 1, price: 10 })
```

- the diff between toEqual and toMatchObject is isEqual check both object exactly,
- eg if you have 50 properties in your object , and you want to match only two then **toMatchObject** is useful, if you have 2 properties and you want to match exactly **toEqual** is useful.

- alternate way to toMatchObject

```js
expect(result).toHaveProperty('id',1)
```

- try to use 2 matchers other than toEqual

# Testing exceptions

- we have test exceptions with the arrow functions

```js
it('should throw , if username is falsy.',()=>{
        // Null, undefined, NaN, '', 0, false
        expect(()=>{ lib.registerUser(null)} ).toThrow();
        // parameterized test
        const args = [null, undefined, NaN, '', 0, false];
        args.forEach(a=>{
            expect(()=>{ lib.registerUser(a)} ).toThrow();
        })
    })
```

# Continuously Running Tests

- how to add jest watch your file and automatically run you file.

> test: 'jest --watchAll'

- f to run only failed tests
- o to only run tests changed file
- p to filter filename by regex pattern.
- t to filter by test name regex

- put console on one side and code on one side

# fizz buzz exercises

# creating simple mock functions

- we don't want database or other service to be up and running while run test cases

- because if that service is unavailable and our unit test failed then we assume there is bug in our code, but this isn't true.

```js
module.exports.applyDiscount = function(order) { 
  const customer = db.getCustomerSync(order.customerId);

  if (customer.points > 10) 
    order.totalPrice *= 0.9; 
}
```

- we do this by replacing real implementation with fake or mock implementation.

```js
   it('should apply 10% discount if customer has more than 10 points.',()=>{
        db.getCustomerSync = function(customerId){
            console.log('fake reading');
            return { id: customerId, points: 20 };
        }
        const order = { customerId: 1, totalPrice: 10 };
        lib.applyDiscount(order);
        expect(order.totalPrice).toBe(9); 
    })
```

# Interaction Testing

- we're testing here interaction of one object with another object

- we're testing interaction between mail and mock mail
```js
it('should send an email to the customer.',()=>{
        db.getCustomerSync = function(customerId){
            return { email: 'a'}
        };
        let mailSent = false;
        mail.send = function(email, message){
            mailSent = true; 
        }

        lib.notifyCustomer({ customerId: 1 });
        expect(mailSent).toBe(true);
    })
```

# Simple way - Jest Mock Functions

- function with node code
```js
const mockFunction = jest.fn();
```

- we can program this mock function to return value

```js
mockFunction.mockReturnValue(1);
```

- we can also mock this function to return promise

```js
mockFunction.mockResolvedValue(1);
const result = await mockFunction(); // ans is 1
```

- if we want to simulate rejections.
```js
mockFunction.mockRejectedValue(new Error('...'));
const result = await mockFunction(); 
```

- we can program it to certain way

```js
 it('should send an email to the customer.',()=>{
        db.getCustomerSync = jest.fn().mockReturnValue({ email: 'a' });
        mail.send = jest.fn();
        lib.notifyCustomer({ customerId: 1 });
        expect(mail.send).toHaveBeenCalled(); //matcher
    })
```

- toHaveBeenCalled this matcher we can use to determine send function is called or not.

- sometime also we need to check arguments that we're passing with matcher

```js
   expect(mail.send).toHaveBeenCalledWith('email','message'); 
```

- check with specific calls

```js
   expect(mail.send).toHaveBeenCalledWith(); 
   expect(mail.send.mock.calls[0][0]).toBe('a'); 
   expect(mail.send.mock.calls[0][1]).toMatch(/order/); 
```

- so we are checking first call , first arg and 2nd arg 


# what to unit test

- use vidly project

- middleware and routes has req, res and so many fatty things , always unit tests functions or algorithms which has minimal dependencies. 

- try to avoid creating too many mocks.
- if we're writing too much mocking then it is better to write integration tests.

- so what can be unit tests.
- generateToken, 

- exercise

# Integration Tests

> jest --watchAll --verbose

flag jest will give extra information of tests.

- setting up the database
- we need test database

- in integration tests we've to load server before and close after test finished.

# Test driven development (TDD)

- tests first approch 
- with TDD you write your tests before writing the production code.

- below 3 steps are foundation of TDD, repeat these steps.
- 1 start writing failing tests 
- 2 write the simplest code to make the test pass.
- 3 refactor code if necessary

# Benefits of TDD
- Testable source code, you don't make any changes your code to make testable.
- Full coverage by tests
- simpler implementation.

- test first / code first
- TDD is more promising, but sometimes it slow down more



