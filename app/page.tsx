"use client";

import useSWR from "swr";
import MessageFeed from "./components/MessageFeed";
import Footer from "./components/Footer";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR("/api/messages", fetcher, {
    refreshInterval: 3000,
  });

  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-y-auto w-full">
        <div className=" max-w-screen-sm mx-auto p-6">
          {isLoading && <div>Loading...</div>}
          {data && <MessageFeed messages={data} />}
          {error && <div>Failed to fetch messages</div>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
