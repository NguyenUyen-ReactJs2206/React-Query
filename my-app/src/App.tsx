import { useRoutes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import AddStudent from './pages/AddStudent'
import About from './pages/About'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from './components/Spinner'
import { useIsFetching, useIsMutating } from 'react-query'

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

  const isFetching = useIsFetching()
  const isMutating = useIsMutating()
  return (
    <div className='App'>
      {isFetching + isMutating !== 0 && <Spinner />}

      <ToastContainer />
      <MainLayout>{elements}</MainLayout>
    </div>
  )
}

export default App
