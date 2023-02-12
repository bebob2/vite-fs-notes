import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import axios from "axios";

const promise = axios.get("/api/notes");

const promise2 = axios.get("/api/foobara");
console.log(promise2);

console.log(promise);

promise.then((response) => {
  console.log(response.data);
});

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>
);
