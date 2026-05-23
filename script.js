async function getData() {
  try {
    const res = await fetch("https://offsets.imtheo.lol/Offsets.hpp"); 
    const html = await res.text();

    // extract text (super basic method)
    let text = html.replace(/<[^>]*>/g, "");

    // modify it however you want
    text = text.toUpperCase();
    text = "🔥 MODDED TEXT 🔥\n\n" + text.slice(0, 1000);

    document.getElementById("output").innerText = text;

  } catch (err) {
    document.getElementById("output").innerText =
      "Failed (CORS probably blocked it): " + err;
  }
}

getData();
