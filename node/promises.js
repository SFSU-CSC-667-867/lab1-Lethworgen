const promiseExample = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve('Hello') }, 3000);
  });
};

promiseExample()
  .then((res)=> res + ' world')
  .catch((e)=> console.log('I am error :('))
  .then((res) => console.log(res))
  .catch((e)=> console.log('I am error :('));

console.log('hi');