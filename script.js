/**Asynchronous Function Assignment
Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
The function should log the message to the console after the specified delay time.*/

const newMessage = new Promise((resolve) => {
  setTimeout(() => {
    resolve(`Message received`);
  }, 1000);
});

async function messagereceived() {
  try {
    console.log(`Welcome to AkiraChix`);
    await newMessage;
    console.log(`We got the message`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
messagereceived();

/*You have an array of user IDs and a function getUserData(id) that returns a Promise with user data 
when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID 
one by one, in sequence.*/

// function getUserData(id) {

// }

const userIDs = [1, 2, 3, 4, 5];

function getUserData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`User data for ID ${id}`);
    }, 1000);
  });
}

async function fetchAndLogInSequence(userIDs) {
  for (const id of userIDs) {
    try {
      const userData = await getUserData(id);
      console.log(`Fetched data for user ID ${id}: ${userData}`);
    } catch (error) {
      console.log(`Failed to fetch data for user ID ${id}: ${error}`);
    }
  }
}

fetchAndLogInSequence(userIDs);

/*You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task 
is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom 
success message if the task is successful, and a custom error message if there's an error.*/

async function performTask() {
  const task = false;//true
  return new Promise((resolve, reject) => {
    if (task) {
      resolve("Task is successfully");
    } else {
      reject("Task is not successful");
    }
  });
}

async function callsPerformTask() {
  try {
    const result = await performTask();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

callsPerformTask();

/*
Retry Logic:
Scenario:
Write a function unstableTask that:

1.Accepts a taskName and failureProbability (a number between 0 and 1).
2. Returns a Promise that:
Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
Write another function executeWithRetry that:

Accepts a taskName, retries, and failureProbability.
Uses a retry mechanism to attempt the unstableTask up to retries times.
Logs whether the task succeeded or failed after all attempts.
*/

// Example function skeleton
function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue > failureProbability) {
            resolve(`${taskName} succeeded`);
        } else {
            reject(`${taskName} failed`);
        }
    });
}


    async function executeWithRetry(taskName, retries, failureProbability) {
        
          try {
            const result = await unstableTask(taskName, failureProbability);
            console.log(result);
         
          } catch (error) {
            console.log(error);
            
              throw error; 
            }
          }
       
      
      
      executeWithRetry("SampleTask", 3, 0.5);






 
