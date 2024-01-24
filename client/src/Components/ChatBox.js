import React from "react";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import MessageSharpIcon from "@mui/icons-material/MessageSharp";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import AttachFileSharpIcon from "@mui/icons-material/AttachFileSharp";
import SendSharpIcon from '@mui/icons-material/SendSharp';
export const ChatBox = () => {
  return (
    <div className="chat-box-container">
      <div className="top-identity-section">
        <div className="seller-image-name-date">
          <img
            alt="seller-image"
            className="seller-image"
            src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=594&q=80"
          ></img>
          <div className="seller-name-date">
            <h3 className="jamshaid">Jamshaid</h3>
            <h6 className="jamsaid-date">Member since Nov 2021</h6>
          </div>
        </div>
        <div className="chat-icons">
          <CallSharpIcon />
          <MessageSharpIcon />
          <MoreVertSharpIcon />
        </div>
      </div>
      <div className="chat-container">
        <div className="chat-text-in-container">
          <p>This is some dummy text</p>
        </div>
      </div>
      <div className="chat-type-container">
        <AttachFileSharpIcon />
        <input className="chat-type-input" placeholder="Type messsage..."></input>
        <SendSharpIcon/>
      </div>
    </div>
  );
};
