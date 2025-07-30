import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/700.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-secondary text-2xl font-bold">Vite + React</h1>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-secondary text-primary px-4 py-2 rounded-button-default hover:bg-opacity-80"
        >
          count is {count}
        </button>
        <p className="text-base text-mono200">
          Edit <code className="bg-mono100 px-2 py-1 rounded">src/App.tsx</code>{" "}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-mono200">
        Click on the Vite and React logos to learn more
      </p>

      {/* Tailwind 색상 테스트 */}
      <div className="mt-8 space-y-4">
        <div className="bg-primary text-white p-4 rounded">Primary 색상</div>
        <div className="bg-secondary text-primary p-4 rounded">
          Secondary 색상
        </div>
        <div className="bg-tertiary text-white p-4 rounded">Tertiary 색상</div>
        <div className="bg-error text-white p-4 rounded">Error 색상</div>
        <div className="bg-social text-white p-4 rounded">Social 색상</div>
      </div>
    </>
  );
}

export default App;
