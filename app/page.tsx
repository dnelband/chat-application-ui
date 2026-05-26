"use client";

import useSWR from "swr";
import MessageFeed from "./components/MessageFeed";
import { useState } from "react";
import NameModal from "./components/NameModal";
import CreateMessageForm from "./components/CreateMessageForm";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const [user, setUser] = useState<string>("");

  const { data, error, isLoading, mutate } = useSWR("/api/messages", fetcher, {
    refreshInterval: 3000,
  });

  return (
    <div className="flex flex-col h-screen">
      {!user && <NameModal setUser={setUser} />}
      {user && (
        <>
          <main className="flex-1 overflow-y-auto w-full">
            <div className=" max-w-screen-sm mx-auto p-6">
              {isLoading && <div>Loading...</div>}
              {data && <MessageFeed messages={data} currentUser={user} />}
              {error && <div>Failed to fetch messages</div>}
            </div>
          </main>
          <footer className="bg-[var(--blue)] w-full">
            <CreateMessageForm user={user} onSubmit={() => mutate} />
          </footer>
        </>
      )}
    </div>
  );
}
