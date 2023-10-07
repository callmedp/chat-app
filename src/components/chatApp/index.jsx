import Chatbox from "./chatBox";
import ChatListing from "./chatListing";
import "./chatIndex.css"
const ChatApp = () => {


    return (
        <>
            <div className="container">
                <ChatListing />
                <Chatbox />
            </div>
        </>
    )
}

export default ChatApp;