import React, { useState } from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Watch from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
function App() {
  return (
    <div>
      <Head />
      <Outlet />
    </div>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "/watch",
            element: <Watch />,
          },
        ],
      },
    ],
  },
]);

// export default App;
