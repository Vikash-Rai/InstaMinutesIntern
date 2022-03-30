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
        // function sleep(milliseconds) {
        //     const date = Date.now();
        //     let currentDate = null;
        //     do {
        //       currentDate = Date.now();
        //     } while (currentDate - date < milliseconds);
        //   }

        const myevent = JSON.parse(jsonString);
        const length = myevent.events.length;
        for(var i=0;i<length;i++){
            const mydate = myevent.events[i].dateTime
            const textdata = myevent.events[i].text
            const mjob= schedule.scheduleJob(mydate, async () => {
                console.log(textdata,new Date())
                rev(textdata)
                mjob.cancel()
              
            });  
        }
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
