"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stressScore, setStressScore] = useState<number | null>(null);
  const [schedule, setSchedule] = useState<any[]>([]);
  const [resources, setResources] = useState<any[]>([]);
  const [prompt, setPrompt] = useState<string>("");
  const [claudeResponse, setClaudeResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch stress/fatigue prediction
  useEffect(() => {
    fetch("/api/focusflow/stress")
      .then(res => res.json())
      .then(data => {
        console.log("Stress data:", data);
        setStressScore(data.stressScore);
      })
      .catch(err => console.error("Stress API failed:", err));
  }, []);

  // Fetch study schedule
  useEffect(() => {
    fetch("/api/focusflow/schedule")
      .then(res => res.json())
      .then(data => setSchedule(data.schedule))
      .catch(err => console.error("Schedule API failed:", err));
  }, []);

  // Fetch related documents/resources
  useEffect(() => {
    fetch("/api/focusflow/resources")
      .then(res => res.json())
      .then(data => setResources(data.documents))
      .catch(err => console.error("Resources API failed:", err));
  }, []);

  // Function to call Claude via Bedrock
  const fetchClaude = async () => {
    if (!prompt) return;
    setLoading(true);
    setError(null);
    setClaudeResponse(null);

    try {
      const res = await fetch("/Users/saishalakkoju/dub25/src/app/api/auth/focusflow/bedrock/route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: "test" }),
      });
      
      const text = await res.text(); // <- just read raw text
      console.log("Raw response:", text);
      const data = JSON.parse(text); // or response.json()


      if (data.result) setClaudeResponse(data.result);
      else if (data.error) setError(data.error);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch Claude response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">FocusFlow Dashboard</h1>

      <div>
        <h2 className="text-xl font-semibold">Stress Level</h2>
        <p>{stressScore !== null ? `${stressScore}%` : "Loading stress data..."}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Suggested Study Schedule</h2>
        <ul>
          {schedule.map((block, i) => (
            <li key={i}>
              {block.time}: {block.task}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Recommended Resources</h2>
        <ul>
          {resources.map((doc, i) => (
            <li key={i}>
              <a href={doc.url} target="_blank" className="text-blue-600 hover:underline">
                {doc.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 User Prompt for Claude */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Ask FocusFlow AI</h2>
        <textarea
          className="w-full border rounded p-2 mt-2"
          rows={5}
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
        />
        <button
          onClick={fetchClaude}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Generating..." : "Submit"}
        </button>

        {error && <p className="text-red-600 mt-2">{error}</p>}

        {claudeResponse && (
          <div className="mt-4 p-4 border rounded bg-gray-50 dark:bg-gray-800 whitespace-pre-wrap">
            {claudeResponse}
          </div>
        )}
      </div>
    </div>
  );
}
