import { RouterProvider } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';
import router from './routes';
import './App.css'

function App() {

  return (
    <div className='bg-slate-900 h-screen'>
      <div className='flex flex-col items-center justify-center h-full'>
        <SessionProvider>
          <RouterProvider router={router}/>
        </SessionProvider>
      </div>
    </div>
  );
  
}

export default App
