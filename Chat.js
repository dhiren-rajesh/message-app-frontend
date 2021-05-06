import { Avatar, IconButton } from "@material-ui/core"
import { AttachFileOutlined, InsertEmoticon, Mic, MoreVert, SearchOutlined } from "@material-ui/icons"
import React from "react"
import "./Chat.css"

function Chat() {
    return (
        <div className="chat">

            {/* Header */}

            <div className="chat__header">
                <Avatar />
                
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlined />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            {/* Messages */}

            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Dhiren</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()/*(message.timestamp?.toDate()).toUTCString()*/}
                    </span>
                </p>

                <p className="chat__message chat__receiver">
                    <span className="chat__name">You</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()/*(message.timestamp?.toDate()).toUTCString()*/}
                    </span>
                </p>
            </div>

            {/* Footer */}

            <div className="chat__footer">
                <InsertEmoticon className="icon" />
                <form>
                    <input placeholder="Type a Message" type="text" />
                    <button type="submit">Send a Message</button>
                </form>
                <Mic className="icon" />
            </div>
        </div>
    )
}

export default Chat
