
import { useContext } from 'react';
import './App.css';
import { appcontext } from './context/appContext';

function App() {
  const {loading} = useContext(appcontext);
  return (
    <div className="App">
         <header className='header'>Tech Blogs</header>
         <div>
          {
            loading?(<Spinner/>):();
          }
         </div>
    </div>
  );
}

export default App;
