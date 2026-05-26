"use client";

import useSWR from "swr";
import MessageFeed from "./components/MessageFeed";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR("/api/messages", fetcher, {
    refreshInterval: 3000,
  });

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-screen-sm p-6 flex-col">
        {isLoading && <div>Loading...</div>}
        {data && <MessageFeed messages={data} />}
        {error && <div>Something went wrong</div>}
      </main>
    </div>
  );
}
