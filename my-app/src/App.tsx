import { useRoutes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import AddStudent from './pages/AddStudent'
import About from './pages/About'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/students',
      element: <Students />
    },
    {
      path: '/students/:id',
      element: <AddStudent />
    },
    {
      path: '/students/add',
      element: <AddStudent />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <div className='App'>
      <ToastContainer />
      <MainLayout>{elements}</MainLayout>
    </div>
  )
}

export default App
