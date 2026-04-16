async function generate() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  output.innerText = "Processing...";

  const res = await fetch("https://YOUR-REPLIT-URL.repl.co/process-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ input })
  });

  const data = await res.json();
  output.innerText = data.output;
}