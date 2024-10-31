import { StrictMode, useEffect, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import App from './App.tsx'
import FriendsPage from "./Friends.tsx"
import "./index.css"
import "./App.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';


function TitleAnim() {
  const init = useMemo(()=>"9b 9b 9b 9b 9b", [])
  useEffect(() => {
    let currentTitle = init;
    document.title = currentTitle;

    const intervalId = setInterval(() => {
      currentTitle = currentTitle.slice(2) + currentTitle.slice(0, 2); 
      document.title = currentTitle;
    }, 1000); // Adjust the interval for speed

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [init]);
  return <></>
}
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  { path: "*", element: <Root /> },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router}/>
      </ThemeProvider>
    <TitleAnim/>
  </StrictMode>,
)

function Root() {
  return (
    <Routes>
      {/* ⬆️ Home route lifted up to the data router */}
      <Route path="/friends/*" element={<FriendsPage />} />
    </Routes>
  );
}