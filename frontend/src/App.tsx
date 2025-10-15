import { Suspense } from 'react'
import './App.css'
import { Loader } from './components/ui/Loader'
import { RouterProvider } from 'react-router'
import { router } from './router/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </>
  )
}

export default App
