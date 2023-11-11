import { createBot } from "botui";
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BotUI, BotUIAction, BotUIMessageList } from "@botui/react";

import findNextBus from './bus.js';

import "@botui/react/dist/styles/default.theme.scss";

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const busSchedule = "[{"Monday": [{"Leave Bryn Mawr": ["7:35 a.m.", "8:15 a.m.", "8:45 a.m.", "9:10 a.m.", "9:30 a.m.", "10:05 a.m.", "10:15 a.m.", "10:35 a.m.", "10:55 a.m.", "11:05 a.m.", "11:35 a.m.", "12:10 p.m.", "12:30 p.m.", "1:10 p.m.", "1:30 p.m.", "2 p.m.", "2:05 p.m.", "2:45 p.m.", "3:10 p.m.", "4 p.m.", "4:05 p.m.", "4:20 p.m.", "5:10 p.m.", "5:50 p.m.", "6:20 p.m.", "7:15 p.m.", "8 p.m.", "8:35 p.m.", "9:05 p.m.", "9:35 p.m.", "10:15 p.m.", "10:55 p.m.", "11:45 p.m.", "12:30 a.m."]}, {"Arrive Haverford": ["7:45 a.m.", "8:25 a.m.", "8:55 a.m.", "9:20 a.m.", "9:40 a.m.", "10:15 a.m.", "10:25 a.m.", "10:45 a.m.", "11:05 a.m.", "11:15 a.m.", "11:45 a.m.", "12:20 p.m.", "12:40 p.m.", "1:20 p.m.", "1:40 p.m.", "2:10 p.m.", "2:15 p.m.", "2:55 p.m.", "3:20 p.m.", "4:10 p.m.", "4:15 p.m.", "4:30 p.m.", "5:20 p.m.", "6 p.m.", "6:30 p.m.", "7:25 p.m.", "8:10 p.m.", "8:45 p.m.", "9:15 p.m.", "9:45 p.m.", "10:25 p.m.", "11:05 p.m.", "11:55 p.m.", "12:40 a.m."]}, {"Leave Haverford": ["7:50 a.m.", "8:50 a.m.", "9:15 a.m.", "9:40 a.m.", "9:45 a.m.", "10:20 a.m.", "10:30 a.m.", "10:50 a.m.", "11:15 a.m.", "11:30 a.m.", "11:50 a.m.", "12:40 p.m.", "12:55 & 1:00 p.m.", "1:45 p.m.", "1:50p.m.", "2:20 p.m.", "2:45 p.m.", "3:20 p.m.", "3:50 p.m.", "4:10 p.m.", "4:20 p.m.", "4:35 p.m.", "5:25 p.m.", "6:05 p.m.", "6:50 p.m.", "7:30 p.m.", "8:15 p.m.", "8:50 p.m.", "9:20 p.m.", "10:05 p.m.", "10:30 p.m.", "11:10 p.m.", "12 a.m.", "12:45 a.m."]}, {"Arrive Bryn Mawr": ["8 a.m.", "9 a.m.", "9:25 a.m.", "9:50 a.m.", "10 a.m.", "10:30 a.m.", "10:45 a.m.", "11 a.m.", "11:25 a.m.", "11:50 a.m.", "12 p.m.", "12:50 p.m.", "1:05 p.m.", "1:55 p.m.", "2 p.m.", "2:30 p.m.", "2:55 p.m.", "3:30 p.m.", "4 p.m.", "4:20 p.m.", "4:30 p.m.", "4:45 p.m.", "5:35 p.m.", "6:15 p.m.", "7 p.m.", "7:40 p.m.", "8:25 p.m.", "9 p.m.", "9:30 p.m.", "10:15 p.m.", "10:40 p.m.", "11:20 p.m.", "12:10 a.m.", "12:55 a.m."]}]}, {"Tuesday": [{"Leave Bryn Mawr": ["7:20 a.m.", "7:55 a.m.", "8:15 a.m.", "8:50 a.m.", "9:10 a.m.", "9:40 a.m.", "9:50 a.m.", "10:35 a.m.", "10:55 a.m.", "11:20 a.m.", "11:25 a.m.", "12:20 p.m.", "12:40 p.m.", "12:50 p.m.", "1:10 p.m.", "1:55 p.m.", "2:10 p.m.", "2:20 p.m.", "3:10 p.m.", "3:40 p.m.", "4:05 p.m.", "4:20 p.m.", "5:10 p.m.", "5:45 p.m.", "6:20 p.m.", "7:10 p.m.", "8 p.m.", "8:35 p.m.", "9:05 p.m.", "9:35 p.m.", "10:15 p.m.", "10:55 p.m.", "11:45 p.m.", "12:30 a.m."]}, {"Arrive Haverford": ["7:30 a.m.", "8:05 a.m.", "8:25 a.m.", "9 a.m.", "9:20 a.m.", "9:50 a.m.", "10 a.m.", "10:45 a.m.", "11:05 a.m.", "11:30 a.m.", "11:35 a.m.", "12:30 p.m.", "12:50 p.m.", "1 p.m.", "1:20 p.m.", "2:05 p.m.", "2:20 p.m.", "2:30 p.m.", "3:20 p.m.", "3:50 p.m.", "4:15 p.m.", "4:30 p.m.", "5:20 p.m.", "5:55 p.m.", "6:30 p.m.", "7:20 p.m.", "8:10 p.m.", "8:45 p.m.", "9:15 p.m.", "9:45 p.m.", "10:25 p.m.", "11:05 p.m.", "11:55 p.m.", "12:40 a.m."]}, {"Leave Haverford": ["7:40 a.m.", "8:10 a.m.", "8:35 a.m.", "9:15 a.m.", "9:40 a.m.", "10:10 a.m.", "10:20 a.m.", "11:05 a.m.", "11:10 a.m.", "11:40 am", "12:10 p.m.", "12:35 p.m.", "1:00 p.m.", "1:20 p.m.", "1:45 p.m.", "2:10 p.m.", "2:40 p.m.", "3:10 p.m.", "3:50 p.m.", "4:05 p.m.", "4:20 p.m.", "4:45 p.m.", "5:30 p.m.", "6:05 p.m.", "6:50 p.m.", "7:30 p.m.", "8:15 p.m.", "8:50 p.m.", "9:20 p.m.", "10:05 p.m.", "10:30 p.m.", "11:10 p.m.", "12 a.m.", "12:45 a.m."]}, {"Arrive Bryn Mawr": ["7:50 a.m.", "8:20 a.m.", "8:45 a.m.", "9:25 a.m.", "9:45 a.m.", "10:20 a.m.", "10:30 a.m.", "11:15 a.m.", "11:20 a.m.", "11:50 a.m.", "12:20 p.m.", "12:45 p.m.", "1:10 p.m.", "1:30 p.m.", "1:55 p.m.", "2:20 p.m.", "2:50 p.m.", "3:20 p.m.", "4 p.m.", "4:15 p.m.", "4:30 p.m.", "4:55 p.m.", "5:40 p.m.", "6:15 p.m.", "7 p.m.", "7:40 p.m.", "8:25 p.m.", "9 p.m.", "9:30 p.m.", "10:15 p.m.", "10:40 p.m.", "11:20 p.m.", "12:10 a.m.", "12:55 a.m."]}]}, {"Wednesday": [{"Leave Bryn Mawr": ["7:35 a.m.", "8:15 a.m.", "8:45 a.m.", "9:10 a.m.", "9:25 &9:30 a.m.", "10:05 a.m.", "10:15 a.m.", "10:35 a.m.", "10:55 a.m.", "11:05 a.m.", "11:35 a.m.", "12:10 p.m.", "12:35 p.m.", "1:10 p.m.", "1:30 p.m.", "2 p.m.", "2:05 p.m.", "2:45 p.m.", "3:10 p.m.", "4 p.m.", "4:05 p.m.", "4:20 p.m.", "5:10 p.m.", "5:50 p.m.", "6:30 p.m.", "7:15 p.m.", "8 p.m.", "8:35 p.m.", "9:10 p.m.", "9:40 p.m.", "10:15 p.m.", "10:55 p.m.", "11:45 p.m.", "12:30 AM"]}, {"Arrive Haverford": ["7:45 a.m.", "8:25 a.m.", "8:55 a.m.", "9:20 a.m.", "9:40 a.m.", "10:15 a.m.", "10:25 a.m.", "10:45 a.m.", "11:05 a.m.", "11:15 a.m.", "11:45 a.m.", "12:20 p.m.", "12:45 p.m.", "1:20 p.m.", "1:40 p.m.", "2:10 p.m.", "2:15 p.m.", "2:55 p.m.", "3:20 p.m.", "4:10 p.m.", "4:15 p.m.", "4:30 p.m.", "5:20 p.m.", "6 p.m.", "6:40 p.m.", "7:25 p.m.", "8:10 p.m.", "8:45 p.m.", "9:20 p.m.", "9:50 p.m.", "10:25 p.m.", "11:05 p.m.", "11:55 p.m.", "12:40 a.m."]}, {"Leave Haverford": ["7:50 a.m.", "8:50 a.m.", "9:15 a.m.", "9:40 a.m.", "9:45 a.m.", "10:20 a.m.", "10:35 a.m.", "10:50 a.m.", "11:15 a.m.", "11:30 a.m.", "11:50a.m.", "12:40 p.m.", "12:55 & 1:00 p.m.", "1:45 p.m.", "1:50 p.m.", "2:20 p.m.", "2:45 p.m.", "3:20 p.m.", "3:50 p.m.", "4:10 p.m.", "4:20 p.m.", "4:35 p.m.", "5:30 p.m.", "6:05 p.m.", "6:50 p.m.", "7:30 p.m.", "8:15 p.m.", "8:55 p.m.", "9:25 p.m.", "9:55 p.m.", "10:30 p.m.", "11:10 p.m.", "12 a.m.", "12:45 a.m."]}, {"Arrive Bryn Mawr": ["8 a.m.", "9 a.m.", "9:25 a.m.", "9:50 a.m.", "10 a.m.", "10:30 a.m.", "10:45 a.m.", "11 a.m.", "11:25 a.m.", "11:50 a.m.", "12 PM", "12:50 p.m.", "1:05 p.m.", "1:55 p.m.", "2 p.m.", "2:30 p.m.", "2:55 p.m.", "3:30 p.m.", "4 p.m.", "4:20 p.m.", "4:30 p.m.", "4:45 p.m.", "5:40 p.m.", "6:15 p.m.", "7 p.m.", "7:40 p.m.", "8:25 p.m.", "9:05 p.m.", "9:35 p.m.", "10:05 p.m.", "10:40 p.m.", "11:20 p.m.", "12:10a.m.", "12:55 a.m."]}]}, {"Thursday": [{"Leave Bryn Mawr": ["7:20 a.m.", "7:55 a.m.", "8:15 a.m.", "8:50 a.m.", "9:10 a.m.", "9:40 a.m.", "9:50 a.m.", "10:35 a.m.", "10:55 a.m.", "11:20 a.m.", "11:25 a.m.", "12:20 p.m.", "12:40 p.m.", "12:50 p.m.", "1:10 p.m.", "1:55 p.m.", "2:10 p.m.", "2:20 p.m.", "3:10 p.m.", "3:40 p.m.", "4:05 p.m.", "4:20 p.m.", "5:10 p.m.", "5:40 p.m.", "6:10 p.m.", "6:40 p.m.", "7:20 p.m.", "8 p.m.", "8:40 p.m.", "9:10 p.m.", "10:15 p.m.", "10:55 p.m.", "11:45 p.m.", "12:30 a.m."]}, {"Arrive Haverford": ["7:30 a.m.", "8:05 a.m.", "8:25 a.m.", "9 a.m.", "9:20 a.m.", "9:50 a.m.", "10 a.m.", "10:45 a.m.", "11:05 a.m.", "11:30 a.m.", "11:35 a.m.", "12:30 p.m.", "12:50 p.m.", "1 p.m.", "1:20 p.m.", "2:05 p.m.", "2:20 p.m.", "2:30 p.m.", "3:20 p.m.", "3:50 p.m.", "4:15 p.m.", "4:30 p.m.", "5:20 p.m.", "5:50 p.m.", "6:20 p.m.", "6:50 p.m.", "7:30 p.m.", "8:10 p.m.", "8:50 p.m.", "9:20 p.m.", "10:25 p.m.", "11:05 p.m.", "11:55 p.m.", "12:40 a.m."]}, {"Leave Haverford": ["7:40 a.m.", "8:10 a.m.", "8:35 a.m.", "9:15 a.m.", "9:40 a.m.", "10:10 a.m.", "10:20 a.m.", "11:05 a.m.", "11:10 a.m.", "11:40 a.m.", "12:10 p.m.", "12:35 p.m.", "1:00 p.m.", "1:20 p.m.", "1:45 p.m.", "2:10 p.m.", "2:40 p.m.", "3:10 p.m.", "3:50 p.m.", "4:05 p.m.", "4:20 p.m.", "4:45 p.m.", "5:25 p.m.", "5:55 p.m.", "6:25 p.m.", "7 p.m.", "7:40 p.m.", "8:20 p.m.", "8:55 p.m.", "9:40 p.m.", "10:30 p.m.", "11:10 p.m.", "12 a.m.", "12:45 a.m."]}, {"Arrive Bryn Mawr": ["7:50 a.m.", "8:20 a.m.", "8:45 a.m.", "9:25 a.m.", "9:45 a.m.", "10:20 a.m.", "10:30 a.m.", "11:15 a.m.", "11:20 a.m.", "11:50 a.m.", "12:20 p.m.", "12:45 p.m.", "1:10 p.m.", "1:30 p.m.", "1:55 p.m.", "2:20 p.m.", "2:50 p.m.", "3:20 p.m.", "4 p.m.", "4:15 p.m.", "4:30 p.m.", "4:55 p.m.", "5:35 p.m.", "6:05 p.m.", "6:35 p.m.", "7:10 p.m.", "7:50 p.m.", "8:30 p.m.", "9:05 p.m.", "9:50 p.m.", "10:40 p.m.", "11:20 p.m.", "12:10 a.m.", "12:55 a.m."]}]}, {"Friday": [{"Leave Bryn Mawr": []}, {"Arrive Haverford": []}, {"Leave Haverford": []}, {"Arrive Bryn Mawr": []}]}, {"Saturday Daytime": [{"Leaves BMC": []}, {"Leaves Suburban Square": []}, {"Leaves HC South Lot Bus Stop": []}, {"Leaves Stokes": []}, {"Leaves Suburban Square": []}]}, {"Saturday Night": [{"Bryn Mawr to Haverford": []}, {"Haverford to Bryn Mawr": []}]}, {"Sunday": [{"Bryn Mawr to Haverford": ["7:55 a.m.", "8:10 a.m.", "8:15 a.m.", "8:35 a.m.", "8:50 a.m.", "9:15 a.m.", "9:10 a.m.", "9:40 a.m.", "9:40 a.m."]}, {"Haverford to Bryn Mawr": ["8:05 a.m.", "8:20 a.m.", "8:25 a.m.", "8:45 a.m.", "9 a.m.", "9:25 a.m.", "9:20 a.m.", "9:45 a.m.", "9:50 a.m."]}]}]";

const mybot = createBot();

const App = () => {
  useEffect(() => {
    mybot.message
      .add({ text: "Hi!" })
      .then(() => mybot.wait({ waitTime: 1000 }))
      .then(() => mybot.message.add({ text: "How can I help you?" }))
      .then(() => mybot.wait({ waitTime: 500 }))
      .then(() =>
        mybot.action.set(
          {
            options: [
              { label: "Blue Bus", value: "bus" },
              { label: "Menu", value: "menu" },
            ],
          },
          { actionType: "selectButtons" },
        ),
      )
      .then((data) => mybot.wait({ waitTime: 500 }, data))
      .then((data) => {
        if (data?.selected?.value == "menu") {
          mybot.message.add({
            text: "This functionality is currently unavailable:( We apologize for the inconvenience.",
          });
        } else {
          mybot.message
            .add({ text: "Where to?" })
            .then(() => mybot.wait({ waitTime: 500 }))
            .then(() =>
              mybot.action.set(
                {
                  options: [
                    { label: "Bryn Mawr", value: "bmc" },
                    { label: "Haverford", value: "hc" },
                  ],
                },
                { actionType: "selectButtons" },
              ),
            )
            .then((data) => mybot.wait({ waitTime: 500 }, data))
            .then((data) => {
              if (data?.selected?.value == "bmc") {
                console.log("bmc");
              } else {
                console.log("hc");
              }
              mybot.message
                .add({ text: "Now or later?" })
                .then(() => mybot.wait({ waitTime: 500 }))
                .then(() =>
                  mybot.action.set(
                    {
                      options: [
                        { label: "Now", value: "now" },
                        { label: "Later", value: "later" },
                      ],
                    },
                    { actionType: "selectButtons" },
                  ),
                )
                .then((data) => mybot.wait({ waitTime: 500 }, data))
                .then((data) => {
                  if (data?.selected?.value == "now") {
                    mybot.message.add({ text: "..." });
                    var d = new Date();
                      let day = weekday[d.getDay()];
                    let hour = d.getHours();
                      let minute = d.getMinutes();
                      let direction = "Leave Bryn Mawr";
                      console.log(day)
                      console.log(hour)
                      console.log(minute)
                      console.log(direction)
                        console.log(findNextBus(busSchedule, day, hour, minute, direction))
                  } else {
                      var day
                      var hour
                      var minute
                      let direction = "Leave Bryn Mawr";
                    mybot.message
                      .add({ text: "Day of the week?" })
                      .then(() => mybot.wait({ waitTime: 500 }))
                      .then(() =>
                        mybot.action.set(
                          {
                            options: [
                              { label: "Mon", value: 1 },
                              { label: "Tue", value: 2 },
                              { label: "Wed", value: 3 },
                              { label: "Thur", value: 4 },
                              { label: "Fri", value: 5 },
                              { label: "Sat", value: 6 },
                              { label: "Sun", value: 0 },
                            ],
                          },
                          { actionType: "selectButtons" },
                        ),
                      )
                      .then((data) => mybot.wait({ waitTime: 500 }, data))
                      .then((data) => {
                          day = weekday[data?.selected?.value] 
                        mybot.message
                          .add({ text: "Please enter the time:" })
                          .then(() => mybot.wait({ waitTime: 500 }))
                          .then(() =>
                            mybot.action.text(
                   { action: { sub_type: 'time', placeholder: 'HH:MM' } }
                          )
                              .then((data) => {
                                  time = data.value.split(":")
                                  hour = time[0]
                                  minute = time[1]
                                  console.log(day)
                                  console.log(hour)
                                  console.log(minute)
                                  console.log(direction)
                        console.log(findNextBus(busSchedule, day, hour, minute, direction))
                              })

                      });
                  }
                });
            });
        }
      });
  }, []);

  return (
    <div>
      <BotUI bot={mybot} >
        <BotUIMessageList />
        <BotUIAction />
      </BotUI>
    </div>
  );
};

const containerElement = document.getElementById("botui");
if (containerElement) {
  const root = createRoot(containerElement);
  root.render(<App />);
}
