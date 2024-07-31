import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { ScrollProvider } from "./context/scrollContext.tsx";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScrollProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ScrollProvider>
  </React.StrictMode>
);
