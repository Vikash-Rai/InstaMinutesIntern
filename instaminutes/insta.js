import schedule from 'node-schedule'
import fs from 'fs'
//At a particular date and time
// const someDate = new Date('2022-03-29 16:37:00.000')
// schedule.scheduleJob(someDate,()=>{
//     console.log("Job ran at",new Date().toString())
// })

fs.readFile("data.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("Error while reading from file", err);
        return;
    }
////////////////////////////////////////CODE BLOCK////////////////////////////////////////////////////////////////////
    try {

        const myevent = JSON.parse(jsonString);
        console.log("For each event item, hitting NodeJS scheduler API asking it to schedule the event... ")
        myevent.events.forEach(job => {
            schedule.scheduleJob(job.dateTime, async () => {
                console.log("Event scheduled at =>",job.dateTime)
                rev(job.text)
            });
        })
        function rev(newtext) {
            var length = newtext.length
            newtext = [...newtext].reverse().join("");
            setTimeout(() => {
                console.log(`After sleeping for ${length} seconds `)
                console.log("returning text : ", newtext)
            }, length * 1000)
        }

///////////////////////////////////////////////////////////////////////////////////////////////////////

    }
    catch (err) {
        console.log("error", err)
    }
})
