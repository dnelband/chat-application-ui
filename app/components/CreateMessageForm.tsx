import React, { useState } from "react";

const CreateMessageForm = ({
  user,
  onSubmit,
}: {
  user: string;
  onSubmit: () => void;
}) => {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState("");

  const sendMessage = async (message: string) => {

    const res = await fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, author: user }),
    });
    if (!res.ok) {
      setError("Failed to send message");
      return;
    }
    setMessage("");
    setError("");
    onSubmit();
  };

  return (
    <div className="max-w-screen-sm mx-auto px-6 py-2">
      <div className=" flex flex-row items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Message"
          className="w-full border rounded p-2 border-[var(--dark-blue)] bg-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage(message);
            }
          }}
        />
        <button
          className="py-2 px-4 bg-[var(--orange)] text-white rounded cursor-pointer"
          onClick={() => sendMessage(message)}
        >
          Send
        </button>
      </div>

    
      {error && <p className="text-red-400 text-xs px-1">{error}</p>}
    </div>
  );
};

export default CreateMessageForm;
