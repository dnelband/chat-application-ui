import { Message } from "@/app/types";
import { format } from "date-fns";

const decodeHtml = (str: string) => {
  const txt = document.createElement('textarea')
  txt.innerHTML = str
  return txt.value
} 

const MessageFeed = ({ messages, currentUser }: { messages: Message[]; currentUser: string }) => {
  return (
    <>
      {messages.map((message) => (
        <div className="flex flex-row" key={message._id}>
          <div className={`w-fit mb-2 p-4 border max-w-[420px] rounded border-gray-300 ${message.author === currentUser ? "bg-[var(--yellow)] ml-auto" : "bg-white"}`}>
            <span className="text-gray-300 text-sm">{message.author}</span>
            <p className="text-gray-700">{decodeHtml(message.message)}</p>
            <span className="text-gray-300 text-sm">{format(message.createdAt, "dd MMM yyyy HH:mm")}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default MessageFeed;
