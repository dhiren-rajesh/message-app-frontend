import React from 'react'
import "./SidebarChat.css"
import {Avatar} from "@material-ui/core"

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h3>Room Name</h3>
                <p>Last Message</p>
            </div>
        </div>
    )
}

export default SidebarChat
