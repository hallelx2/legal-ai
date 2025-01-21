"use client"
import ChatBot, { ChatBotProvider } from "react-chatbotify";
import { SendIcon } from "lucide-react";
import { Flow, Params } from "react-chatbotify";
import React from 'react'

function Chatbot() {
    const flow: Flow = {
        start: {
          message: "What is your age?",
          path: "end"
        },
        end: {
          message: (params: Params) => `I see you are ${params.userInput}!`,
          chatDisabled: true
        }
      }
  return (
    <div>
        <ChatBot
            flow={flow}
            styles={{
              tooltipStyle: {
                height: 40,
                padding: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 100,
                fontSize: 14,
                bottom: 70,
                fontWeight:700,
                borderRadius: 16,
                background: "white",
                color: "blue"
              },
              botBubbleStyle: { height: 100, fontSize: "10" },
              chatIconStyle: { height: 30 },
              chatButtonStyle: { height: 60, width: 60, background: "rgb(76, 0, 255)", boxShadow: "2px 3px 6px #adc7ff", bottom: 60, right: 20 },
              chatWindowStyle: { borderRadius: 20, boxShadow: "2px 3px 6px #d2d2d2", padding: 8, fontSize: 12 },
              bodyStyle: {
                background: "#f9f9f9",
                fontSize: 12
              },
              headerStyle: {
                background: "#f2f2f2",
                border: 0
              },
              chatInputContainerStyle: {
                border: 0
              },
              chatInputAreaStyle: {},
              sendButtonStyle: {
                background: "white"
              },


            }}
            settings={{
              general: {
                primaryColor: "rgb(76, 0, 255)",
                secondaryColor: "rgb(76, 0, 255)",
                fontFamily: "Noto San",
                showFooter: false
              },
              tooltip: {
                mode: "CLOSE",
                text: "Chat Cora"
              },
              chatInput: {
                sendButtonIcon: SendIcon
              },
              footer: {
                text: "",
                buttons: []
              },
              header: {
                title: (
                  <div style={{ cursor: "pointer", margin: 0, fontSize: 16, fontWeight: "bold", color: "black" }}>
                    Cora
                  </div>
                ),
                avatar: "https://cdn.pixabay.com/photo/2023/02/05/20/30/ai-generated-7770511_1280.jpg"
              },
              userBubble: {

              },
              botBubble: {
                avatar: "https://cdn.pixabay.com/photo/2023/02/05/20/30/ai-generated-7770511_1280.jpg",
                showAvatar: true
              }
            }}
          />
    </div>
  )
}

export default Chatbot