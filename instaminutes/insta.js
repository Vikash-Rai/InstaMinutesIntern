import schedule from 'node-schedule'
//At a particular date and time
const someDate = new Date('2022-03-29 13:53:00.000')
schedule.scheduleJob(someDate,()=>{
    console.log("Job ran at",new Date().toString())
})
