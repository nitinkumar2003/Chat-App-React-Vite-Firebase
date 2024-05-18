import React, { useEffect, useRef, useState } from "react";
import { query, collection, orderBy, onSnapshot, limit, } from "firebase/firestore";
import { db } from '../component/firebase'
import SendMessage from "../component/SendMessage";
import Message from "../component/Message";
const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "desc"),
            //   limit(2)
        );

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = [];
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({ ...doc.data(), id: doc.id });
            });
            const sortedMessages = fetchedMessages.sort(
                (a, b) => a.createdAt - b.createdAt
            );
            setMessages(sortedMessages);
        });
        return () => unsubscribe;
    }, []);

    return (
        <main className="chat-box">
            <div className="messages-wrapper">
                {messages?.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
            <span ref={scroll}></span>
            <SendMessage scroll={scroll} />
            {/* when a new message enters the chat, the screen scrolls down to the scroll div */}

        </main>
    );
};

export default ChatBox;