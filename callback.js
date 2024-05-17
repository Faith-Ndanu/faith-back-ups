 //QUESTION1  
   function repeatMessage(message,delayTime){
    setTimeout(()=>{
    console.log(message)},delayTime);
}
repeatMessage("Hello Faith",3000)

//QUESTION2
const userIds=['user1','user2','user3'];
async function fetchAndLogUserData(){
    for(const userId of userIds){
        try{
            const userId = await
            getUserData(userId)
            console.log(userData)
        }
        catch(error){
            console.log(`An error occured for user ${userId}:${error}`);
        }
    }
}
function getUserData(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const userData = {id,name:`user ${id},age:20`}
            resolve(userData)
        },1000)
    });
};
fetchAndLogUserData()


//QUESTION 3
async function callPerformTask(){
    try{
        await callPerformTask()
        console.log(`The task was successful`)
    }
    catch (error){
        console.log(`there was an error`, + error)
    }
}

function performTask(){
    return newPromise((resolve,reject)=>{
        const isSuccess =true
        setTimeout(()=>{
        if(isSuccess){
          resolve()
        }
else{
    reject(`something went wrong`)
}},1000);
    })
}
callPerformTask();

//QUESTION 4
function unstableTask(taskName,failurePropability){
return newPromise((resolve,reject)=>{
    const randomNum=Math.random();
    if(randomNum>failurePropability){
        resolve(`Task "${taskName}" succeeded!`)
    }
    else{
        reject(`Task "${taskName}" failed!`)
    }
})
}
async function
executedWithRetry(taskName,retries,failurePropability){
    let attempts=0
    while(attempts<retries){
        try{
            await unstableTask(taskName,failurePropability);
            console.log(`task"${taskName}" succeeded after ${attempts+1} attempts`)
            return;
        }
        catch (error){
            attempts++
            console.log(`Attempts ${attempts} failed ; ${error}`);
        }
    }
    console.log(`Task "${taskName}" failed after ${retries} attempts`);
}

executedWithRetry("unstable Task", 3, 0.3);






