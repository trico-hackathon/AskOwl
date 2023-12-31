// Sample JSON data
// const busSchedule = [{"Monday": [{"Leave Bryn Mawr": ["7:35 a.m.", "8:15 a.m.", /* ... */]}, /* ... */]}];

const busSchedule = [
  {
    Monday: [
      {
        "Leave Bryn Mawr": [
          "7:35 a.m.",
          "8:15 a.m.",
          "8:45 a.m.",
          "9:10 a.m.",
          "9:30 a.m.",
          "10:05 a.m.",
          "10:15 a.m.",
          "10:35 a.m.",
          "10:55 a.m.",
          "11:05 a.m.",
          "11:35 a.m.",
          "12:10 p.m.",
          "12:30 p.m.",
          "1:10 p.m.",
          "1:30 p.m.",
          "2 p.m.",
          "2:05 p.m.",
          "2:45 p.m.",
          "3:10 p.m.",
          "4 p.m.",
          "4:05 p.m.",
          "4:20 p.m.",
          "5:10 p.m.",
          "5:50 p.m.",
          "6:20 p.m.",
          "7:15 p.m.",
          "8 p.m.",
          "8:35 p.m.",
          "9:05 p.m.",
          "9:35 p.m.",
          "10:15 p.m.",
          "10:55 p.m.",
          "11:45 p.m.",
          "12:30 a.m.",
        ],
      },
      {
        "Arrive Haverford": [
          "7:45 a.m.",
          "8:25 a.m.",
          "8:55 a.m.",
          "9:20 a.m.",
          "9:40 a.m.",
          "10:15 a.m.",
          "10:25 a.m.",
          "10:45 a.m.",
          "11:05 a.m.",
          "11:15 a.m.",
          "11:45 a.m.",
          "12:20 p.m.",
          "12:40 p.m.",
          "1:20 p.m.",
          "1:40 p.m.",
          "2:10 p.m.",
          "2:15 p.m.",
          "2:55 p.m.",
          "3:20 p.m.",
          "4:10 p.m.",
          "4:15 p.m.",
          "4:30 p.m.",
          "5:20 p.m.",
          "6 p.m.",
          "6:30 p.m.",
          "7:25 p.m.",
          "8:10 p.m.",
          "8:45 p.m.",
          "9:15 p.m.",
          "9:45 p.m.",
          "10:25 p.m.",
          "11:05 p.m.",
          "11:55 p.m.",
          "12:40 a.m.",
        ],
      },
      {
        "Leave Haverford": [
          "7:50 a.m.",
          "8:50 a.m.",
          "9:15 a.m.",
          "9:40 a.m.",
          "9:45 a.m.",
          "10:20 a.m.",
          "10:30 a.m.",
          "10:50 a.m.",
          "11:15 a.m.",
          "11:30 a.m.",
          "11:50 a.m.",
          "12:40 p.m.",
          "12:55 & 1:00 p.m.",
          "1:45 p.m.",
          "1:50p.m.",
          "2:20 p.m.",
          "2:45 p.m.",
          "3:20 p.m.",
          "3:50 p.m.",
          "4:10 p.m.",
          "4:20 p.m.",
          "4:35 p.m.",
          "5:25 p.m.",
          "6:05 p.m.",
          "6:50 p.m.",
          "7:30 p.m.",
          "8:15 p.m.",
          "8:50 p.m.",
          "9:20 p.m.",
          "10:05 p.m.",
          "10:30 p.m.",
          "11:10 p.m.",
          "12 a.m.",
          "12:45 a.m.",
        ],
      },
      {
        "Arrive Bryn Mawr": [
          "8 a.m.",
          "9 a.m.",
          "9:25 a.m.",
          "9:50 a.m.",
          "10 a.m.",
          "10:30 a.m.",
          "10:45 a.m.",
          "11 a.m.",
          "11:25 a.m.",
          "11:50 a.m.",
          "12 p.m.",
          "12:50 p.m.",
          "1:05 p.m.",
          "1:55 p.m.",
          "2 p.m.",
          "2:30 p.m.",
          "2:55 p.m.",
          "3:30 p.m.",
          "4 p.m.",
          "4:20 p.m.",
          "4:30 p.m.",
          "4:45 p.m.",
          "5:35 p.m.",
          "6:15 p.m.",
          "7 p.m.",
          "7:40 p.m.",
          "8:25 p.m.",
          "9 p.m.",
          "9:30 p.m.",
          "10:15 p.m.",
          "10:40 p.m.",
          "11:20 p.m.",
          "12:10 a.m.",
          "12:55 a.m.",
        ],
      },
    ],
  },
  {
    Tuesday: [
      {
        "Leave Bryn Mawr": [
          "7:20 a.m.",
          "7:55 a.m.",
          "8:15 a.m.",
          "8:50 a.m.",
          "9:10 a.m.",
          "9:30 and 9:40 a.m.",
          "9:50 a.m.",
          "10:35 a.m.",
          "10:55 a.m.",
          "11:20 a.m.",
          "11:25 a.m.",
          "12:20 p.m.",
          "12:40 p.m.",
          "12:50 p.m.",
          "1:10 p.m.",
          "1:55 p.m.",
          "2:10 p.m.",
          "2:20 p.m.",
          "3:10 p.m.",
          "3:40 p.m.",
          "4:05 p.m.",
          "4:20 p.m.",
          "5:10 p.m.",
          "5:45 p.m.",
          "6:20 p.m.",
          "7:10 p.m.",
          "8 p.m.",
          "8:35 p.m.",
          "9:05 p.m.",
          "9:35 p.m.",
          "10:15 p.m.",
          "10:55 p.m.",
          "11:45 p.m.",
          "12:30 a.m.",
        ],
      },
      {
        "Arrive Haverford": [
          "7:30 a.m.",
          "8:05 a.m.",
          "8:25 a.m.",
          "9 a.m.",
          "9:20 a.m.",
          "9:50 a.m.",
          "10 a.m.",
          "10:45 a.m.",
          "11:05 a.m.",
          "11:30 a.m.",
          "11:35 a.m.",
          "12:30 p.m.",
          "12:50 p.m.",
          "1 p.m.",
          "1:20 p.m.",
          "2:05 p.m.",
          "2:20 p.m.",
          "2:30 p.m.",
          "3:20 p.m.",
          "3:50 p.m.",
          "4:15 p.m.",
          "4:30 p.m.",
          "5:20 p.m.",
          "5:55 p.m.",
          "6:30 p.m.",
          "7:20 p.m.",
          "8:10 p.m.",
          "8:45 p.m.",
          "9:15 p.m.",
          "9:45 p.m.",
          "10:25 p.m.",
          "11:05 p.m.",
          "11:55 p.m.",
          "12:40 a.m.",
        ],
      },
      {
        "Leave Haverford": [
          "7:40 a.m.",
          "8:10 a.m.",
          "8:35 a.m.",
          "9:15 a.m.",
          "9:30 and 9:40 a.m.",
          "10:10 a.m.",
          "10:20 a.m.",
          "11:05 a.m.",
          "11:10 a.m.",
          "11:35 and 11:40 am",
          "12:10 p.m.",
          "12:35 p.m.",
          "1:00 p.m.",
          "1:20 p.m.",
          "1:45 p.m.",
          "2:10 p.m.",
          "2:40 p.m.",
          "3:10 p.m.",
          "3:50 p.m.",
          "4:05 p.m.",
          "4:20 p.m.",
          "4:45 p.m.",
          "5:30 p.m.",
          "6:05 p.m.",
          "6:50 p.m.",
          "7:30 p.m.",
          "8:15 p.m.",
          "8:50 p.m.",
          "9:20 p.m.",
          "10:05 p.m.",
          "10:30 p.m.",
          "11:10 p.m.",
          "12 a.m.",
          "12:45 a.m.",
        ],
      },
      {
        "Arrive Bryn Mawr": [
          "7:50 a.m.",
          "8:20 a.m.",
          "8:45 a.m.",
          "9:25 a.m.",
          "9:45 a.m.",
          "10:20 a.m.",
          "10:30 a.m.",
          "11:15 a.m.",
          "11:20 a.m.",
          "11:50 a.m.",
          "12:20 p.m.",
          "12:45 p.m.",
          "1:10 p.m.",
          "1:30 p.m.",
          "1:55 p.m.",
          "2:20 p.m.",
          "2:50 p.m.",
          "3:20 p.m.",
          "4 p.m.",
          "4:15 p.m.",
          "4:30 p.m.",
          "4:55 p.m.",
          "5:40 p.m.",
          "6:15 p.m.",
          "7 p.m.",
          "7:40 p.m.",
          "8:25 p.m.",
          "9 p.m.",
          "9:30 p.m.",
          "10:15 p.m.",
          "10:40 p.m.",
          "11:20 p.m.",
          "12:10 a.m.",
          "12:55 a.m.",
        ],
      },
    ],
  },
  {
    Wednesday: [
      {
        "Leave Bryn Mawr": [
          "7:35 a.m.",
          "8:15 a.m.",
          "8:45 a.m.",
          "9:10 a.m.",
          "9:25 &9:30 a.m.",
          "10:05 a.m.",
          "10:15 a.m.",
          "10:35 a.m.",
          "10:55 a.m.",
          "11:05 a.m.",
          "11:35 a.m.",
          "12:10 p.m.",
          "12:35 p.m.",
          "1:10 p.m.",
          "1:30 p.m.",
          "2 p.m.",
          "2:05 p.m.",
          "2:45 p.m.",
          "3:10 p.m.",
          "4 p.m.",
          "4:05 p.m.",
          "4:20 p.m.",
          "5:10 p.m.",
          "5:50 p.m.",
          "6:30 p.m.",
          "7:15 p.m.",
          "8 p.m.",
          "8:35 p.m.",
          "9:10 p.m.",
          "9:40 p.m.",
          "10:15 p.m.",
          "10:55 p.m.",
          "11:45 p.m.",
          "12:30 AM",
        ],
      },
      {
        "Arrive Haverford": [
          "7:45 a.m.",
          "8:25 a.m.",
          "8:55 a.m.",
          "9:20 a.m.",
          "9:40 a.m.",
          "10:15 a.m.",
          "10:25 a.m.",
          "10:45 a.m.",
          "11:05 a.m.",
          "11:15 a.m.",
          "11:45 a.m.",
          "12:20 p.m.",
          "12:45 p.m.",
          "1:20 p.m.",
          "1:40 p.m.",
          "2:10 p.m.",
          "2:15 p.m.",
          "2:55 p.m.",
          "3:20 p.m.",
          "4:10 p.m.",
          "4:15 p.m.",
          "4:30 p.m.",
          "5:20 p.m.",
          "6 p.m.",
          "6:40 p.m.",
          "7:25 p.m.",
          "8:10 p.m.",
          "8:45 p.m.",
          "9:20 p.m.",
          "9:50 p.m.",
          "10:25 p.m.",
          "11:05 p.m.",
          "11:55 p.m.",
          "12:40 a.m.",
        ],
      },
      {
        "Leave Haverford": [
          "7:50 a.m.",
          "8:50 a.m.",
          "9:15 a.m.",
          "9:40 a.m.",
          "9:45 a.m.",
          "10:20 a.m.",
          "10:35 a.m.",
          "10:50 a.m.",
          "11:15 a.m.",
          "11:30 a.m.",
          "11:45 and 11:50a.m.",
          "12:40 p.m.",
          "12:55 & 1:00 p.m.",
          "1:45 p.m.",
          "1:50 p.m.",
          "2:20 p.m.",
          "2:45 p.m.",
          "3:20 p.m.",
          "3:50 p.m.",
          "4:10 p.m.",
          "4:20 p.m.",
          "4:35 p.m.",
          "5:30 p.m.",
          "6:05 p.m.",
          "6:50 p.m.",
          "7:30 p.m.",
          "8:15 p.m.",
          "8:55 p.m.",
          "9:25 p.m.",
          "9:55 p.m.",
          "10:30 p.m.",
          "11:10 p.m.",
          "12 a.m.",
          "12:45 a.m.",
        ],
      },
      {
        "Arrive Bryn Mawr": [
          "8 a.m.",
          "9 a.m.",
          "9:25 a.m.",
          "9:50 a.m.",
          "10 a.m.",
          "10:30 a.m.",
          "10:45 a.m.",
          "11 a.m.",
          "11:25 a.m.",
          "11:50 a.m.",
          "12 PM",
          "12:50 p.m.",
          "1:05 p.m.",
          "1:55 p.m.",
          "2 p.m.",
          "2:30 p.m.",
          "2:55 p.m.",
          "3:30 p.m.",
          "4 p.m.",
          "4:20 p.m.",
          "4:30 p.m.",
          "4:45 p.m.",
          "5:40 p.m.",
          "6:15 p.m.",
          "7 p.m.",
          "7:40 p.m.",
          "8:25 p.m.",
          "9:05 p.m.",
          "9:35 p.m.",
          "10:05 p.m.",
          "10:40 p.m.",
          "11:20 p.m.",
          "12:10a.m.",
          "12:55 a.m.",
        ],
      },
    ],
  },
  {
    Thursday: [
      {
        "Leave Bryn Mawr": [
          "7:20 a.m.",
          "7:55 a.m.",
          "8:15 a.m.",
          "8:50 a.m.",
          "9:10 a.m.",
          "9:30 and 9:40 a.m.",
          "9:50 a.m.",
          "10:35 a.m.",
          "10:55 a.m.",
          "11:20 a.m.",
          "11:25 a.m.",
          "12:20 p.m.",
          "12:40 p.m.",
          "12:50 p.m.",
          "1:10 p.m.",
          "1:55 p.m.",
          "2:10 p.m.",
          "2:20 p.m.",
          "3:10 p.m.",
          "3:40 p.m.",
          "4:05 p.m.",
          "4:20 p.m.",
          "5:10 p.m.",
          "5:40 p.m.",
          "6:10 p.m.",
          "6:40 p.m.",
          "7:20 p.m.",
          "8 p.m.",
          "8:40 p.m.",
          "9:10 p.m.",
          "10:15 p.m.",
          "10:55 p.m.",
          "11:45 p.m.",
          "12:30 a.m.",
        ],
      },
      {
        "Arrive Haverford": [
          "7:30 a.m.",
          "8:05 a.m.",
          "8:25 a.m.",
          "9 a.m.",
          "9:20 a.m.",
          "9:50 a.m.",
          "10 a.m.",
          "10:45 a.m.",
          "11:05 a.m.",
          "11:30 a.m.",
          "11:35 a.m.",
          "12:30 p.m.",
          "12:50 p.m.",
          "1 p.m.",
          "1:20 p.m.",
          "2:05 p.m.",
          "2:20 p.m.",
          "2:30 p.m.",
          "3:20 p.m.",
          "3:50 p.m.",
          "4:15 p.m.",
          "4:30 p.m.",
          "5:20 p.m.",
          "5:50 p.m.",
          "6:20 p.m.",
          "6:50 p.m.",
          "7:30 p.m.",
          "8:10 p.m.",
          "8:50 p.m.",
          "9:20 p.m.",
          "10:25 p.m.",
          "11:05 p.m.",
          "11:55 p.m.",
          "12:40 a.m.",
        ],
      },
      {
        "Leave Haverford": [
          "7:40 a.m.",
          "8:10 a.m.",
          "8:35 a.m.",
          "9:15 a.m.",
          "9:30 and 9:40 a.m.",
          "10:10 a.m.",
          "10:20 a.m.",
          "11:05 a.m.",
          "11:10 a.m.",
          "11:35 and 11:40 a.m.",
          "12:10 p.m.",
          "12:35 p.m.",
          "1:00 p.m.",
          "1:20 p.m.",
          "1:45 p.m.",
          "2:10 p.m.",
          "2:40 p.m.",
          "3:10 p.m.",
          "3:50 p.m.",
          "4:05 p.m.",
          "4:20 p.m.",
          "4:45 p.m.",
          "5:25 p.m.",
          "5:55 p.m.",
          "6:25 p.m.",
          "7 p.m.",
          "7:40 p.m.",
          "8:20 p.m.",
          "8:55 p.m.",
          "9:40 p.m.",
          "10:30 p.m.",
          "11:10 p.m.",
          "12 a.m.",
          "12:45 a.m.",
        ],
      },
      {
        "Arrive Bryn Mawr": [
          "7:50 a.m.",
          "8:20 a.m.",
          "8:45 a.m.",
          "9:25 a.m.",
          "9:45 a.m.",
          "10:20 a.m.",
          "10:30 a.m.",
          "11:15 a.m.",
          "11:20 a.m.",
          "11:50 a.m.",
          "12:20 p.m.",
          "12:45 p.m.",
          "1:10 p.m.",
          "1:30 p.m.",
          "1:55 p.m.",
          "2:20 p.m.",
          "2:50 p.m.",
          "3:20 p.m.",
          "4 p.m.",
          "4:15 p.m.",
          "4:30 p.m.",
          "4:55 p.m.",
          "5:35 p.m.",
          "6:05 p.m.",
          "6:35 p.m.",
          "7:10 p.m.",
          "7:50 p.m.",
          "8:30 p.m.",
          "9:05 p.m.",
          "9:50 p.m.",
          "10:40 p.m.",
          "11:20 p.m.",
          "12:10 a.m.",
          "12:55 a.m.",
        ],
      },
    ],
  },
  {
    Friday: [
      { "Leave Bryn Mawr": [] },
      { "Arrive Haverford": [] },
      { "Leave Haverford": [] },
      { "Arrive Bryn Mawr": [] },
    ],
  },
  {
    "Saturday Daytime": [
      { "Leaves BMC": [] },
      { "Leaves Suburban Square": [] },
      { "Leaves HC South Lot Bus Stop": [] },
      { "Leaves Stokes": [] },
      { "Leaves Suburban Square": [] },
    ],
  },
  {
    "Saturday Night": [
      { "Bryn Mawr to Haverford": [] },
      { "Haverford to Bryn Mawr": [] },
    ],
  },
  {
    Sunday: [
      {
        "Bryn Mawr to Haverford": [
          "7:55 a.m.",
          "8:10 a.m.",
          "8:15 a.m.",
          "8:35 a.m.",
          "8:50 a.m.",
          "9:15 a.m.",
          "9:10 a.m.",
          "9:30 and 9:40 a.m.",
          "9:30 and 9:40 a.m.",
        ],
      },
      {
        "Haverford to Bryn Mawr": [
          "8:05 a.m.",
          "8:20 a.m.",
          "8:25 a.m.",
          "8:45 a.m.",
          "9 a.m.",
          "9:25 a.m.",
          "9:20 a.m.",
          "9:45 a.m.",
          "9:50 a.m.",
        ],
      },
    ],
  },
];

// Function to find the next available bus
const findNextBus = (schedule, day, hour, minute, direction) => {

      d = direction.split(/\s+/);
      d = d.slice(1, d.length + 1).join(" ");
// check for valid inputs
  if (hour > 24 || hour < 0){
      return "Invalid hour";
  }
  if (minute > 60 || minute < 0){
      return "Invalid min";
  }
  if (day !== "Monday" && day !== "Tuesday" && day !== "Wednesday" && day !== "Thursday"){
    return `Sorry, schedule for ${day} is currently unavailable 🥲`
  }
  
  // Convert input time to minutes for easier comparison
  const inputTime = hour * 60 + minute; 

  // edge case: mid night buses
  if (direction === "Leave Bryn Mawr"){
    if (inputTime > 1424 || inputTime < 30){
        return `The next available bus to ${d} leaves at 00:30 on ${day} ⏳`;
    }
  }
  else if (direction === "Leave Haverford"){
    if (inputTime > 1389){
        return `The next available bus to ${d} leaves at 00:00 on ${day} ⏳`;
    }
    else if (inputTime < 45){
        return `The next available bus to ${d} leaves at 00:45 on ${day} ⏳`;
    }
  }

  schedule = busSchedule;
  console.log(schedule);
  console.log(busSchedule);

  // Find the schedule for the specified day
  const daySchedule = schedule.find((entry) => entry.hasOwnProperty(day));

  if (daySchedule) {
    // Find the schedule for the specified direction
    const directionSchedule = daySchedule[day].find((entry) =>
      entry.hasOwnProperty(direction),
    );

    const originalTimes = directionSchedule[direction];
    const convertedTimes = originalTimes.map(convertTo24Hr);
    directionSchedule[direction] = convertedTimes;
    // console.log(directionSchedule);

    if (directionSchedule) {
      // Find the next available bus time
      const nextBusTime = directionSchedule[direction].find((busTime) => {
        const [busHour, busMinute] = busTime.split(":");
        const busTimeInMinutes = parseInt(busHour) * 60 + parseInt(busMinute);
        return busTimeInMinutes > inputTime;
      });

      var ret;

      // Display the result using alert
      if (nextBusTime) {
        ret = `The next available bus to ${d} leaves at ${nextBusTime} on ${day} ⏳`;
      } else {
        ret = `There are no more buses to ${d} on ${day} 🥲`;
      }
    } else {
      ret = `No schedule found for buses to ${d} on ${day} 🧐`;
    }
  } else {
    ret = `No schedule found for ${day} 🥲`;
  }
  return ret;
};

function convertTo24Hr(timeString) {
  const [time, period] = timeString.split(" ");

  let [hours, min] = time.split(":");

  if (min === undefined) {
    min = "00";
  }

  // Convert to 24-hour format
  if (period.toLowerCase() === "p.m." && hours !== "12") {
    hours = String(parseInt(hours) + 12);
  } else if (period.toLowerCase() === "a.m." && hours === "12") {
    hours = "00";
  }
  return `${hours}:${min}`;
}

// convert time testing
// const amPmTime = '12:30 a.m.';
// const convertedTime = convertTo24Hr(amPmTime);
// console.log(convertedTime);

const directionSchedule = {
  "Leave Bryn Mawr": [
    "7:20 a.m.",
    "7:55 a.m.",
    "8:15 a.m.",
    "8:50 a.m.",
    "9:10 a.m.",
    "9:40 a.m.",
    "9:50 a.m.",
    "10:35 a.m.",
    "10:55 a.m.",
    "11:20 a.m.",
    "11:25 a.m.",
    "12:20 p.m.",
    "12:40 p.m.",
    "12:50 p.m.",
    "1:10 p.m.",
    "1:55 p.m.",
    "2:10 p.m.",
    "2:20 p.m.",
    "3:10 p.m.",
    "3:40 p.m.",
    "4:05 p.m.",
    "4:20 p.m.",
    "5:10 p.m.",
    "5:45 p.m.",
    "6:20 p.m.",
    "7:10 p.m.",
    "8 p.m.",
    "8:35 p.m.",
    "9:05 p.m.",
    "9:35 p.m.",
    "10:15 p.m.",
    "10:55 p.m.",
    "11:45 p.m.",
    "12:30 a.m.",
  ],
};

// console.log(directionSchedule);
// const originalTimes = directionSchedule['Leave Bryn Mawr'];
// const convertedTimes = originalTimes.map(convertTo24Hr);
// directionSchedule['Leave Bryn Mawr'] = convertedTimes;
// console.log(directionSchedule);

// Example usage
/*
const day = "Wednesday";
const hour = 19;
const minute = 09;
const direction = "Leave Bryn Mawr";

findNextBus(busSchedule, day, hour, minute, direction);
*/

export default findNextBus;
