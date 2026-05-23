const proxyUrl =
  "https://r.jina.ai/http://offsets.imtheo.lol/Offsets.hpp";

let content = "";

async function loadOffsets() {
  try {
    const res = await fetch(proxyUrl);

    if (!res.ok) {
      throw new Error("HTTP " + res.status);
    }

    content = await res.text();

    document.getElementById("text").textContent = content;

  } catch (err) {
    document.getElementById("text").textContent =
      "FAILED TO LOAD OFFSETS\n\n" + err;
  }
}

function copyText() {
  if (!content) return;
  navigator.clipboard.writeText(content);
}

loadOffsets();
