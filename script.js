const url =
  "https://corsproxy.io/?" +
  encodeURIComponent("https://offsets.imtheo.lol/Offsets.hpp");
let content = "";

async function loadOffsets() {
  try {
    const res = await fetch(url);
    const text = await res.text();

    content = text;
    document.getElementById("text").textContent = text;

  } catch (e) {
    document.getElementById("text").textContent =
      "FAILED: " + e;
  }
}

function copyText() {
  navigator.clipboard.writeText(content || "");
}

loadOffsets();
