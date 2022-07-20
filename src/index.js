import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";
// import App2 from "./App2";
// import App3 from "./App3";
// import App4 from "./App4";
// import App5 from "./App5";
// import App6 from "./App6";
// import App7 from "./App7";
// import App8 from "./App8";
// import App9 from "./App9";
// import App10 from "./App10";
import App11 from "./App11";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> using class component */}
    {/* <App2 /> using class component */}
    {/* <App3 /> increase, decrease, reset score */}
    {/* <App4 /> message title */}
    {/*<App5 /> use prev value b/c async  */}
    {/* <App6 /> use prev value b/c async  */}
    {/* <App7 /> use prev value b/c async  */}
    {/* <App8 /> use prev value b/c async  */}
    {/* <App9 /> use prev value b/c async  */}
    {/* <App10 /> use prev value b/c async */}
    <App11 /> use prev value b/c async
  </StrictMode>
);
