import schedule from 'node-schedule'
//At a particular date and time
// const someDate = new Date('2022-03-29 13:53:00.000')
// schedule.scheduleJob(someDate,()=>{
//     console.log("Job ran at",new Date().toString())
// })


//At recurrence intervals
schedule.scheduleJob('my-job','*/2 * * * * *',()=>{
 console.log("I ran")
 schedule.cancelJob('my-job')
})
// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
