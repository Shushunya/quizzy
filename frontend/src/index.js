import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import reportWebVitals from "./reportWebVitals";

import { ErrorPage } from "./pages/error-page";
import { LandingPage } from "./pages/landingPage";
import { LoginPage } from "./pages/authorization/login-page";
import { Root } from "./pages/root";
import { SignUpPage } from "./pages/authorization/signup-page";
import { QuizDetailPage } from "./pages/quiz-detail-page";
import { QuizListPage } from "./pages/quiz-list-page";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/quizzes",
        element: <QuizListPage />,
      },
      {
        path: "/quizzes/:pk",
        element: <QuizDetailPage />
      }
    ],
  },
  {
    path: "/accounts/me",
    element: <div>User management</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
