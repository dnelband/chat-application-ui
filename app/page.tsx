"use client";

import useSWR from "swr";
import MessageFeed from "./components/MessageFeed";
import { useState } from "react";
import NameModal from "./components/NameModal";
import CreateMessageForm from "./components/CreateMessageForm";
import Loader from "./components/Loader";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const [user, setUser] = useState<string>("");

  const { data, error, isLoading, mutate } = useSWR("/api/messages", fetcher, {
    refreshInterval: 3000,
    skip: !user,
  });

  return (
    <div className="flex flex-col h-screen">
      {!user && <NameModal setUser={setUser} />}
      {user && (
        <>
          <main className="flex-1 overflow-y-auto w-full">
            <div className=" max-w-screen-sm mx-auto p-6">
              {isLoading && (
                <Loader />  
              )}
              {data && <MessageFeed messages={data.messages} currentUser={user} />}
              {error && (
                <div className="flex items-center gap-2 text-sm text-red-400 bg-red-50 border border-red-100 rounded-lg p-3 mx-auto">
                  Failed to fetch messages
                </div>
              )}
            </div>
          </main>
          <footer className="bg-[var(--blue)] w-full">
            <CreateMessageForm user={user} onSubmit={() => mutate()} />
          </footer>
        </>
      )}
    </div>
  );
}
