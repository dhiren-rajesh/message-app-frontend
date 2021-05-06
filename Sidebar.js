import React from "react"
import "./Sidebar.css"
import SidebarChat from "./SidebarChat"
import {Avatar, IconButton} from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from "@material-ui/icons";

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Header - Avatar & Right */}
            
            <div className="sidebar__header">
                <Avatar src="https://pbs.twimg.com/profile_images/1184114794103595010/021TqaVX.jpg"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon className="icon" />
                    </IconButton>
                    <IconButton>
                        <ChatIcon className="icon" />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon className="icon" />
                    </IconButton>
                </div>
            </div>

            {/* Searchbar */}

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined className="icon" />
                    <input placeholder="Search or start a new chat" type="text" />
                </div>
            </div>

            {/* Chats */}

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
