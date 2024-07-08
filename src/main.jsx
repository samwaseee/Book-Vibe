import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Components/Root";
import Books from "./Components/Books";
import BookDetails from "./Components/BookDetails";
import ListedBooks from "./Components/ListedBooks";
import About from "./Components/About";
import TopGrossing from "./Components/TopGrossing";
import PagesToRead from "./Components/PagesToRead";
import Error from "./Components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        loader: () => fetch('books.json'),
        element: <Books></Books>
      },
      {
        path: "/book/:id",
        loader: () => fetch('books.json'),
        element: <BookDetails></BookDetails>
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/topGrossing",
        element: <TopGrossing></TopGrossing>
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
