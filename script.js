let content = "";

const targetUrl = "https://offsets.imtheo.lol/Offsets.hpp";

const proxyUrl =
  "https://api.allorigins.win/raw?url=" +
  encodeURIComponent(targetUrl);

async function loadOffsets() {
  try {
    const res = await fetch(proxyUrl);

    if (!res.ok) throw new Error("HTTP " + res.status);

    content = await res.text();

    document.getElementById("text").textContent = content;

  } catch (err) {
    document.getElementById("text").textContent =
      "FAILED TO LOAD:\n\n" + err;
  }
}

function copyText() {
  navigator.clipboard.writeText(content || "");
}

loadOffsets();
