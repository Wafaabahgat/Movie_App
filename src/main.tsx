import ReactDOM from "react-dom/client";
import router from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import { Toaster } from "react-hot-toast";

import 'swiper/swiper-bundle.min.css';
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster position="top-right" reverseOrder={false} />
  </Provider>
);
