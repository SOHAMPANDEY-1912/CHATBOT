import RobotProfileImage from "../assets/robot_image.png"; // ./ ->current folder inside that assets inside that robot_image.png, it is called default export
import UserProfileImage from "../assets/user_image.png"; // this is how we import images using vite, vite lets us import any type of file, .. represents the outer folder
export function ChatMessage({ message, sender }) {
  // this will take directly the properties of message and sender, shortcut of above 3 lines
  /*if (sender === "robot") {
          return (
            <div>
               <img src="robot_image.png" width="50" />
              {message}
             
            </div>
          );
          }
          */
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}
