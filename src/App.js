import React, { Suspense, lazy, useState } from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
// import Watch from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import Demo from "./components/Demo";
import SearchResultVideo from "./components/SearchResultVideo";
import VideoContainer from "./components/VideoContainer";
import SearchReasultPage from "./components/SearchReasultPage";
const Watch = lazy(() => import("./components/WatchPage"));

function App() {
  return (
    <div>
      {/* <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      /> */}
      <Head />
      <Outlet />
    </div>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/Youtube",
    element: <App />,
    children: [
      {
        path: "/Youtube",
        element: <Body />,
        children: [
          {
            path: "",
            element: <MainContainer />,
            children: [
              {
                path: "",
                element: <VideoContainer />,
              },
              {
                path: "results",
                element: <SearchReasultPage/>,
              },
            ],
          },
        ],
      },
      {
        path: "/Youtube/watch",
        element: (
          <Suspense
            fallback={
              <div className="w-[900px] h-[500px] bg-slate-900 rounded-2xl ml-8 absolute top-20"></div>
            }>
            <Watch />
          </Suspense>
        ),
      },
      {
        path: "/Youtube/demo",
        element: <Demo />,
      },
    ],
  },
]);

// export default App;
