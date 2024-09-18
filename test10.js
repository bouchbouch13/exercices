const { sleep } = require('./10_promise');


const testSleep = async () => {
  console.log("att 2sec...");
  await sleep();  
  console.log("2 sec écoulées !");
}

testSleep();
