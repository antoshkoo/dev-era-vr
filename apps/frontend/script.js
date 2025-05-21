console.log("Hello World!", window.origin);

const request = () => {
  const url = "https://api.dev-era-vr.ru";
  const options = {
    method: "GET",
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => setHeader(data.message))
    .catch((error) => console.error("Error:", error));
};

const setHeader = (message) => {
  const h1 = document.createElement("h1");
  h1.innerText = message;
  document.body.appendChild(h1);
  h1.innerText = message;
};

request();
