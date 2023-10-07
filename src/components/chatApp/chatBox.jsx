import { useState } from "react";
import "./chatBox.css"

const Chatbox = (props) => {

    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([])

    const handleChange = (eve) => {
        setMessage(eve.target.value)
    }

    console.log(messageList)

    const sendMessage = () => {

        setMessageList(state => {
            
            return [...state, message];
        })
        setMessage("")
    }

    return (
        <div className="box-container">
            <div className="chat-section">
                {
                    messageList.map((mess, index) => {

                        return (
                            <div key={index} className= { index %2 === 0 ? "left-message" : "right-message"} >
                                {mess}
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <input type="text" value={message} onChange={handleChange} />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Chatbox;