import { Message } from "@/app/types";
import { format } from "date-fns";

const MessageFeed = ({ messages }: { messages: Message[] }) => {
  return (
    <>
      {messages.map((message) => (
        <div className="flex flex-row" key={message._id}>
          <div className="w-fit mb-2 p-4 border max-w-[420px] rounded bg-white border-gray-300">
            <span className="text-gray-300 text-sm">{message.author}</span>
            <p className="text-gray-700">{message.message}</p>
            <span className="text-gray-300 text-sm">{format(message.createdAt, "dd MMM yyyy HH:mm")}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default MessageFeed;
