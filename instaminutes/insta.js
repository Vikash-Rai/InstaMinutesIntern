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
        const length = myevent.events.length;
        for(var i=0;i<length;i++){
            const mydate = myevent.events[i].dateTime
            const textdata = myevent.events[i].text
            const mjob= schedule.scheduleJob(mydate, async () => {
                console.log("-----------------------------------------------------")
                console.log("Event is scheduled at => ",mydate)
                rev(textdata) //calling function to reverse the text and showing the text on console
                mjob.cancel()
            });  
        }
        function rev(newtext) {
            var length = newtext.length
            newtext = [...newtext].reverse().join("");
            setTimeout(() => {
                console.log(`After sleeping for ${length} seconds `)
                console.log("returning text : ", newtext) //Displaying the reversed text on console...
                console.log("-----------------------------------------------------")
            }, length * 1000)
        }

///////////////////////////////////////////////////////////////////////////////////////////////////////

    }
    catch (err) {
        console.log("error", err)
    }
})
