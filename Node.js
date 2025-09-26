import fetch from "node-fetch";

const res = await fetch("http://localhost:11434/api/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "llama3:8b",
    prompt: "You are a D&D character. Introduce yourself."
  })
});

const data = await res.json();
console.log(data.response);
