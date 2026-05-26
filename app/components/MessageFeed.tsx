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
    {!messages && (
      <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-50 border border-gray-200 rounded-lg p-3 mx-auto">
        No messages yet
      </div>
    )}
      {messages && messages.map((message, index) => {
        const previousAuthor = index > 0 ? messages[index - 1].author : null;
        const isAuthor = message.author === currentUser
        const isPreviousAuthor = previousAuthor === currentUser
        return (
        <div className="flex flex-row" key={message._id}>
          <div className={`w-fit mb-2 p-4 border max-w-[420px] rounded border-gray-300 ${message.author === currentUser ? "bg-[var(--yellow)] ml-auto" : "bg-white"} ${isAuthor && !isPreviousAuthor ? "mt-2" : "mt-0"}`}>
            <span className="text-gray-300 text-sm">{message.author}</span>
            <p className="text-gray-700">{decodeHtml(message.message)}</p>
            <span className="text-gray-300 text-sm">{format(message.createdAt, "dd MMM yyyy HH:mm")}</span>
          </div>
        </div>
      )
      })}
    </>
  );
};

export default MessageFeed;
