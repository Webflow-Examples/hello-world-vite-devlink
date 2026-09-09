import { useState } from "react";

import honoLogo from "/hono.svg";
import viteLogo from "/vite.svg";
import webflowLogo from "/webflow.svg";

export default function App() {
  const [count, setCount] = useState(0);
  // Seeded with a non-breaking space so the response line keeps its height
  // before the first call.
  const [apiResponse, setApiResponse] = useState(" ");

  // Calls the Hono worker in src/worker.ts. __WF_BASE_URL__ is rewritten by
  // Webflow Cloud to the app's mount path, so this works at any mount point.
  const callApi = async () => {
    setApiResponse("Loading...");
    try {
      const response = await fetch(`${__WF_BASE_URL__}api/hello`);
      const data = await response.json();
      setApiResponse(JSON.stringify(data));
    } catch (error) {
      setApiResponse(`Error: ${error}`);
    }
  };

  return (
    <div>
      <a href="https://vite.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://hono.dev/" target="_blank" rel="noreferrer">
        <img src={honoLogo} className="logo vanilla" alt="Hono logo" />
      </a>
      <a href="https://webflow.com/cloud" target="_blank" rel="noreferrer">
        <img src={webflowLogo} className="logo vanilla" alt="Webflow logo" />
      </a>
      <h1>Vite + Hono + Webflow Cloud</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <button type="button" onClick={callApi}>
          Call API
        </button>
        <p className="api-response">{apiResponse}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, Hono and Webflow logos to learn more
      </p>
    </div>
  );
}
