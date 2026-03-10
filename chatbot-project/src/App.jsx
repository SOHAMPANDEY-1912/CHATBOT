
import { useState } from 'react'             //this feature is called named export
import {ChatInput} from './components/ChatInput';              // vite adds .js or .jsx automatically so we can remove it from the file name
// import { Chatbot } from 'supersimpledev';
import ChatMessages from './components/ChatMessages';            // this feature is called default export
import './App.css'
   
     

function App() {
        //component inside a component

        // arrow function=works same way as a function,but its shorter

        // chatMessage is the object and .message is the property and saves it into the message props, {}=> saves the result of the code into the prop

        // each chatmessage has two props message,sender
        const [chatMessages,setChatMessages] = useState([
          {
            message: "hello chatbot",
            sender: "user",
            id: "id1",
          },
          {
            message: "Hello! How can i help you?",
            sender: "robot",
            id: "id2",
          },
          {
            message: "can you get me todays date",
            sender: "user",
            id: "id3",
          },
          {
            message: "Today is March 6",
            sender: "robot",
            id: "id4",
          },
        ]);
       // const [chatMessages]=array;      // array destructuring, this is a shortcut of the following below line
       // const [chatMessages,setChatMessages]=array;   // this is a shortcut of the following below two lines
      // const chatMessages = array[0]; //the current data
       // const setChatMessages = array[1]; //updater function to update this data of html    // this function lets us update the data, in react we should not update the data directly, if we update the data directly React will not update the HTML, this is also known as updater function
        // currently chatMessages is a normal variable when we update the chatMessages it will not update the html however if we convert chatMessages into state, it will update the html, we should always create a copy and then modify the copy this helps react be more efficient
       
        return (                                    // we can't style fragment with css so we convert it into div
          <div className="app-container">
            
            <ChatMessages 
            chatMessages={chatMessages}
            />
            <ChatInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
