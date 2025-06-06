import React, { useState, useEffect } from "react";

// @ts-ignore
import Worker from 'worker-loader!./workers/worker.ts'; // adjust based on tooling

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    const worker = new Worker();
    worker.postMessage("start");
    worker.onmessage = (e: MessageEvent) => {
      setD(e.data);
      worker.terminate();
    };
  }, []);

  return <div>{d}</div>;
}