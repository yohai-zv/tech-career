
const setTimeoutV2 = (cb, time)=>{

  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      cb();
      resolve();
    }, time);  
  });
  
}

const sayHello = ()=> {
  console.info("Hello");
}

const sayAsiName = ()=> {
  console.info("My name is Asi");
}


const sayMyAge = ()=> {
  console.info("Im 30 years old");
}


const run = async () => {
  console.info("run start");
  await setTimeoutV2(sayHello, 3000);
  console.info("123")
  await setTimeoutV2(sayAsiName, 1000);
  await setTimeoutV2(sayMyAge, 500);
}

run();