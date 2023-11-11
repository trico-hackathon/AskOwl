import { createBot } from "botui";
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BotUI, BotUIAction, BotUIMessageList } from "@botui/react";
import "../css/index.css";

import findNextBus from "./bus.js";

import "@botui/react/dist/styles/default.theme.scss";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const busSchedule = [];
var destination;

const mybot = createBot();

const ReloadAction = () => {
  const bot = useBotUI(); // current instance
  const action = useBotUIAction(); // get current action

  return (
    <div>
      <button onClick="window.location.href=window.location.href">
        Refresh Page
      </button>
    </div>
  );
};

const actionRenderers = {
  reload: ReloadAction,
};

var utterance;
var isVoiceOn;

const App = () => {
  useEffect(() => {
    mybot.message
      .add({ text: "Hi 👋" })
      .then(() => mybot.wait({ waitTime: 500 }))
      .then(() =>
        mybot.message.add({
          text: "Would you like to turn off the text-to-speech accessibility feature?",
        }),
      )
      .then(() => {
        utterance = new SpeechSynthesisUtterance(
          "Hi! Would you like to turn off the text-to-speech accessibility feature?",
        );
        speechSynthesis.speak(utterance);
      })

      .then(() => {
        utterance = new SpeechSynthesisUtterance(
          "Button 1: Yes. Button 2: No.",
        );
        speechSynthesis.speak(utterance);
      })
      .then(() =>
        mybot.action.set(
          {
            options: [
              { label: "Yes", value: false },
              { label: "No", value: true },
            ],
          },
          { actionType: "selectButtons" },
        ),
      )
      .then((data) => {
        isVoiceOn = data?.selected?.value;
      })
      .then(() => mybot.wait({ waitTime: 1000 }))
      .then(() => mybot.message.add({ text: "How can I help you?" }))
      .then(() => {
        utterance = new SpeechSynthesisUtterance("How can I help you?");
        if (isVoiceOn) {
          speechSynthesis.speak(utterance);
        }
      })
      .then(() => mybot.wait({ waitTime: 500 }))
      .then(() => {
        utterance = new SpeechSynthesisUtterance(
          "Button 1: Blue Bus. Button 2: Menu.",
        );
        if (isVoiceOn) {
          speechSynthesis.speak(utterance);
        }
      })

      .then(() =>
        mybot.action.set(
          {
            options: [
              { label: "Blue Bus 🚌", value: "bus" },
              { label: "Menu 🥙", value: "menu" },
            ],
          },
          { actionType: "selectButtons" },
        ),
      )
      .then((data) => mybot.wait({ waitTime: 500 }, data))
      .then((data) => {
        if (data?.selected?.value == "menu") {
          mybot.message
            .add({
              text: "This functionality is currently under construction...",
            })
            .then(() => {
              utterance = new SpeechSynthesisUtterance(
                "This functionality is currently under construction...",
              );
              if (isVoiceOn) {
                speechSynthesis.speak(utterance);
              }
            })
            .then(() => mybot.wait({ waitTime: 1500 }))
            .then(() => mybot.message.add({ text: "🛠️🪚🔩⚙️🩹" }))
            .then(() => mybot.wait({ waitTime: 1500 }))
            .then(() =>
              mybot.message.add({
                text: "We apologize for the inconvenience.",
              }),
            )

            .then(() => {
              utterance = new SpeechSynthesisUtterance(
                "We apologize for the inconvenience.",
              );
              if (isVoiceOn) {
                speechSynthesis.speak(utterance);
              }
            })
            .then(() => mybot.wait({ waitTime: 500 }))
            .then(() => {
              utterance = new SpeechSynthesisUtterance("Button 1: Start Over.");
              if (isVoiceOn) {
                speechSynthesis.speak(utterance);
              }
            })

            .then(() =>
              mybot.action.set(
                {
                  options: [{ label: "Start Over", value: "0" }],
                },
                { actionType: "selectButtons" },
              ),
            )
            .then((data) => {
              if (data?.selected?.value == "0") {
                window.location.reload();
              }
            });
          //mybot.message.removeAll()
        } else {
          mybot.message
            .add({ text: "Where to?" })
            .then(() => {
              utterance = new SpeechSynthesisUtterance("Where to?");
              if (isVoiceOn) {
                speechSynthesis.speak(utterance);
              }
            })

            .then(() => mybot.wait({ waitTime: 500 }))
            .then(() => {
              utterance = new SpeechSynthesisUtterance(
                "Button 1: Bryn Mawr. Button 2: Haverford.",
              );
              if (isVoiceOn) {
                speechSynthesis.speak(utterance);
              }
            })

            .then(() =>
              mybot.action.set(
                {
                  options: [
                    { label: "Bryn Mawr 🦉", value: "bmc" },
                    { label: "Haverford 🐿️", value: "hc" },
                  ],
                },
                { actionType: "selectButtons" },
              ),
            )
            .then((data) => mybot.wait({ waitTime: 500 }, data))
            .then((data) => {
              if (data?.selected?.value == "bmc") {
                direction = "Leave Bryn Mawr";
                console.log("bmc");
              } else {
                console.log("hc");
                direction = "Leave Haverford";
              }
              console.log(direction);
              mybot.message
                .add({ text: "Now or later?" })

                .then(() => {
                  utterance = new SpeechSynthesisUtterance("Now or Later?");
                  if (isVoiceOn) {
                    speechSynthesis.speak(utterance);
                  }
                })

                .then(() => mybot.wait({ waitTime: 500 }))
                .then(() => {
                  utterance = new SpeechSynthesisUtterance(
                    "Button 1: Now. Button 2: Later.",
                  );
                  if (isVoiceOn) {
                    speechSynthesis.speak(utterance);
                  }
                })

                .then(() =>
                  mybot.action.set(
                    {
                      options: [
                        { label: "Now 🏃", value: "now" },
                        { label: "Later 🚶", value: "later" },
                      ],
                    },
                    { actionType: "selectButtons" },
                  ),
                )
                .then((data) => mybot.wait({ waitTime: 500 }, data))
                .then((data) => {
                  if (data?.selected?.value == "now") {
                    var d = new Date();
                    let day = weekday[d.getDay()];
                    let hour = d.getHours();
                    let minute = d.getMinutes();
                    console.log(day);
                    console.log(hour);
                    console.log(minute);
                    console.log(direction);
                    res = findNextBus(
                      busSchedule,
                      day,
                      hour,
                      minute,
                      direction,
                    );
                    console.log(res);
                    mybot
                      .wait({ waitTime: 1000 })
                      .then(() => mybot.message.add({ text: res }))

                      .then(() => {
                        utterance = new SpeechSynthesisUtterance(res);
                        if (isVoiceOn) {
                          speechSynthesis.speak(utterance);
                        }
                      })

                      .then(() => mybot.wait({ waitTime: 500 }))
                      .then(() => {
                        utterance = new SpeechSynthesisUtterance(
                          "Button 1: Start Over.",
                        );
                        if (isVoiceOn) {
                          speechSynthesis.speak(utterance);
                        }
                      })

                      .then(() =>
                        mybot.action.set(
                          {
                            options: [{ label: "Start Over", value: "0" }],
                          },
                          { actionType: "selectButtons" },
                        ),
                      )
                      .then((data) => {
                        if (data?.selected?.value == "0") {
                          window.location.reload();
                        }
                      });
                  } else {
                    var day;
                    var hour;
                    var minute;
                    mybot.message
                      .add({ text: "Day of the week?" })

                      .then(() => {
                        utterance = new SpeechSynthesisUtterance(
                          "Please select the day of the week.",
                        );
                        if (isVoiceOn) {
                          speechSynthesis.speak(utterance);
                        }
                      })
                      .then(() => {
                        utterance = new SpeechSynthesisUtterance(
                          "Button 1: Monday. Button 2: Tuesday. Button 3: Wednesday. Button 4: Thursday. Button 5: Friday. Button 6: Saturday. Button 7: Sunday.",
                        );

                        if (isVoiceOn) {
                          speechSynthesis.speak(utterance);
                        }
                      })

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
                        day = weekday[data?.selected?.value];
                        mybot.message
                          .add({ text: "Time?" })

                          .then(() => {
                            utterance = new SpeechSynthesisUtterance(
                              "Please select the time of the day.",
                            );

                            if (isVoiceOn) {
                              speechSynthesis.speak(utterance);
                            }
                          })

                          .then(() => mybot.wait({ waitTime: 500 }))
                          .then(() =>
                            mybot.action.set(
                              { type: "time" },
                              { actionType: "input" },
                            ),
                          )
                          .then((data) => {
                            console.log(data);
                            time = data.value.split(":");
                            hour = parseInt(time[0], 10);
                            minute = parseInt(time[1], 10);
                            console.log(day);
                            console.log(hour);
                            console.log(minute);
                            console.log(direction);
                            res = findNextBus(
                              busSchedule,
                              day,
                              hour,
                              minute,
                              direction,
                            );
                            return res;
                          })
                          .then((res) => {
                            console.log(res);
                            mybot
                              .wait({ waitTime: 1000 })
                              .then(() => {
                                mybot.message.add({ text: res });
                              })
                              .then(() => {
                                utterance = new SpeechSynthesisUtterance(res);
                                if (isVoiceOn) {
                                  speechSynthesis.speak(utterance);
                                }
                              })

                              .then(() => mybot.wait({ waitTime: 500 }))
                              .then(() => {
                                utterance = new SpeechSynthesisUtterance(
                                  "Button 1: Start Over.",
                                );
                                if (isVoiceOn) {
                                  speechSynthesis.speak(utterance);
                                }
                              })

                              .then(() =>
                                mybot.action.set(
                                  {
                                    options: [
                                      { label: "Start Over", value: "0" },
                                    ],
                                  },
                                  { actionType: "selectButtons" },
                                ),
                              )
                              .then((data) => {
                                if (data?.selected?.value == "0") {
                                  window.location.reload();
                                }
                              });
                          });
                      });
                  }
                });
            });
        }
      });
  }, []);

  return (
    <div>
      <BotUI bot={mybot}>
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
