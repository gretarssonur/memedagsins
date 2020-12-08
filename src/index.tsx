import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

const rootEl = document.getElementById("root");

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootEl,
);
