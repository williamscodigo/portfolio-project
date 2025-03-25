import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      { path: '', element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'contact', element: <Contact /> },
      { path: 'resume', element: <Resume /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
