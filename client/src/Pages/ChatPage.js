import React from "react";
import { Header } from "../Components/Header";
import { ChatBox } from "../Components/ChatBox";
export const ChatPage=()=>{
    return(
        <div className="chat-main-container">
            <Header/>
            <ChatBox/>
        </div>
    )
}