import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import App from './App.tsx'
import FriendsPage from "./Friends.tsx"
import PanelPage from "./Panel.tsx"
import Page404 from "./404.tsx"
import "./index.css"
import "./App.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import AbuseReport from './components/AbuseReport.tsx';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <><App/><AbuseReport/></>,
  },
  { path: "*", element: <Root /> },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router}/>
      </ThemeProvider>
  </StrictMode>,
)

function Root() {
  return (
    <Routes>
      {/* ⬆️ Home route lifted up to the data router */}
      <Route path="/friends/" element={<><FriendsPage /><AbuseReport /></>} />
      <Route path="/panel/" element={<PanelPage />} />
      <Route path="/friends/:name" element={<><FriendsPage /><AbuseReport /></>} />
      <Route path="*" element={<><Page404 /><AbuseReport /></>} />
    </Routes>
  );
}