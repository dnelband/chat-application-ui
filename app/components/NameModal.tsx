import { useEffect, useState } from "react";

const NameModal = ({ setUser }: { setUser: (name: string) => void }) => {

  const [name, setName] = useState<string>("");

  useEffect(() => {
    const storedName = sessionStorage.getItem("user");

    if (storedName) {
        setUser(storedName);
    }
  }, []);

  const handleSetUser = (name: string) => {
    if (!name) return;
    sessionStorage.setItem("user", name);
    setUser(name);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm mx-4 shadow-xl">
        <h2 className="text-xl font-semibold mb-1">Welcome to the chat</h2>
        <p className="text-gray-400 text-sm mb-6">What should we call you?</p>
        <input
          type="text"
          placeholder="Your name"
          className="w-full border border-gray-200 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSetUser(name);
            }
          }}
        />
        <button
          className="w-full bg-[var(--orange)] text-white rounded-lg px-4 py-2 font-medium cursor-pointer"
          disabled={!name}
          onClick={() => {
              handleSetUser(name);
          }}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default NameModal;
