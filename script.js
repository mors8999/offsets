async function getData() {
  try {

    const url =
      "https://corsproxy.io/?https://offsets.imtheo.lol/Offsets.hpp";

    const res = await fetch(url);

    const html = await res.text();

    let text = html.replace(/<[^>]*>/g, "");

    text = text.toUpperCase();

    document.getElementById("output").innerText =
      text.slice(0, 2000);

  } catch (err) {

    document.getElementById("output").innerText =
      err;

  }
}

getData();
