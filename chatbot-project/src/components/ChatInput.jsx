   import  {useState } from "react";
   import { Chatbot } from 'supersimpledev';
   import './ChatInput.css'
   export function ChatInput({chatMessages,setChatMessages}) {                 //ChatInput only exists in this file. it cannot be used outside this file to do so we will put a keyword export
        //props() is an object and contains all the attributes that we have given to this component
        const [inputText, setInputText]=useState('')                       // initial value(empty string)
        function saveInputText(event){           //event is an object it contains the details about the change
         setInputText(event.target.value);  
        }
           function sendMessage()  {
             const newChatMessages=
             [
            ...chatMessages,
            {
              message: inputText,
              sender:'user',
              id: crypto.randomUUID()
            }  // spread operator (...) = takes the values in an array, and copies them into a new array
          ];
             setChatMessages(newChatMessages);
            const response= Chatbot.getResponse(inputText);
             setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender:'robot',
              id: crypto.randomUUID()
            } // spread operator (...) = takes the values in an array, and copies them into a new array
          ]);
             setInputText('')
           }                                           // it gives us the element that we are typing in
        
        
        return (
          <div className="chat-input-container">
            <input
              placeholder="send a message to chatbotinput"
              size="30"
              onChange={saveInputText} 
              value={inputText}    
              className="chat-input"             // if we set input text to empty the value in html also becomes empty, this is called controlled input                // onChange=runs a function when we change the text inside an <input>
              />

            <button
             onClick={sendMessage}
             className="send-button"                                  // javascript already has a feature class, class is a reserved word
            >Send</button>
          </div>
          //size="" inside number shows that how many characters can fit in this input
        );
        // we can't return two elements so we will be using div element
      }
      // function ChatMessage(props) {
      // const message = props.message;
      // const sender = props.sender;

      // const { message, sender }=props;// shortcut of above two lines syntax, deconstructing