const proxyUrl =
  "https://api.allorigins.win/raw?url=" +
  encodeURIComponent("https://offsets.imtheo.lol/Offsets.hpp");

let content = "";

async function loadOffsets() {
  try {
    const res = await fetch(proxyUrl);

    if (!res.ok) {
      throw new Error("HTTP error: " + res.status);
    }

    content = await res.text();

    document.getElementById("text").textContent = content;

  } catch (err) {
    document.getElementById("text").textContent =
      "Failed to load offsets:\n\n" + err;
  }
}

function copyText() {
  if (!content) return;

  navigator.clipboard.writeText(content);
}

loadOffsets();
