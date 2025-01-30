import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Homepage from './Routes/homepage/HomePage';
import DashBoardPage from './Routes/dashboard/DashBoardPage';
import ChatPage from './Routes/chatpage/ChatPage';  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  { 
    path: "/dashboard",
    element: <DashBoardPage />,
    children: [
      { path: "chatpage/:id", element: <ChatPage /> }  // Fixed child route path
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
