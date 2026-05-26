import React from "react";
import { Message } from "@/app/types";

const MessageFeed = ({ messages }: { messages: Message[] }) => {
  return (
    <>
      {messages.map((message) => (
        <div className="flex flex-row" key={message._id}>
          <div className="w-fit mb-2 p-4 bg-white border border-gray-300 max-width-[420px] rounded">
            <span className="text-gray-300 text-sm">{message.author}</span>
            <p>{message.message}</p>
            <span className="text-gray-300 text-sm">{message.createdAt}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default MessageFeed;
