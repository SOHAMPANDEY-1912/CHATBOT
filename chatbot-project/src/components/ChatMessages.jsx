 
 import  { useEffect, useRef } from "react";
 import {ChatMessage} from './ChatMessage';
 import './ChatMessages.css';
 function ChatMessages({chatMessages}) {              //instead of putting export in this line we will do it in bottom
       const chatMessagesRef = useRef(null);                               //useRef=automatically save an html element from the component,it is a container with special react features
        useEffect(()=>{                        //React will run this function . after component is created . every time the component is updated
         const containerElem=chatMessagesRef.current;
         if(containerElem){
          containerElem.scrollTop=containerElem.scrollHeight;
         }
        },[chatMessages]);                           //Dependency array=control when useEffect runs
        return (
          <div className="chat-messages-container"
          ref={chatMessagesRef}>
           

            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage // event prop always start with the 'on' and then the name of the event like 'Click'
                  message={chatMessage.message} // onClick -> event, sendMessage -> event handler(it does something when this event happens)
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            })}
          </div> // onClick=run a function we click
          // {} = save any type of value in a prop (including a function)
        );
      }
      export default ChatMessages;          // Default export, it is useful when you want to export one thing from a file
