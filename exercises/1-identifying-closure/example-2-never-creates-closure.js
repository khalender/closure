// any function that returns a new function creates a closure
// returning a function that was passed as an argument does not create a closure
// the returned function must be declared inside the function call ("frame" on js tutor)

const doesItClose = (func, arg) => {
  const returnVal = func(arg);
  const returnedAFunction = typeof returnVal === 'function';
  const returnedArgument = arg === returnVal;

  const createsAClosure = returnedAFunction && !returnedArgument;
  return createsAClosure;
}

const never = (x) => {
  return console.log(x);
}

const whenPassed4 = doesItClose(never, 4);
console.assert(whenPassed4 === null, "... when passed 4");

const whenPassedAFunction = doesItClose(never, function () { });
console.assert(whenPassedAFunction === null, "... when passed a function");

const whenPassedAnArray = doesItClose(never, []);
console.assert(whenPassedAnArray === null, "... when passed an array");

const whenPassedItself = doesItClose(never, never);
console.assert(whenPassedItself === null, "... when passed itself");
