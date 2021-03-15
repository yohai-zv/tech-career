
const sayHello = ()=> {
  console.info("Hello");
}

const sayAsiName = ()=> {
  console.info("My name is Asi");
}


const SayMyAge = ()=> {
  console.info("Im 30 years old");
}


function run(){
  console.info("run start");

  setTimeout(() => {
    sayHello();
    setTimeout(()=>{
      sayAsiName();
      setTimeout(SayMyAge, 500);
    }, 1000)
  }, 3000);

}

run();