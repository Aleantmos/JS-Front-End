function meetings(arr) {

    let meetings = [];

    for (let infoMeeting of arr) {
        let [day, personName] = infoMeeting.split(" ");

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            meetings[day] = personName;
            console.log(`Scheduled for ${day}`)
        }
    }

    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)
    }
}

meetings(['Friday Bob',

'Saturday Ted',

'Monday Bill',

'Monday John',

'Wednesday George'])