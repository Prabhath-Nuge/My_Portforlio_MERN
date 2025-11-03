import { useState } from 'react'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'


function App() {
  const [isToggled, setIsToggled] = useState('');

  const handleToggle = () => {
    setIsToggled(prevState => prevState === '' ? 'rainforest' : '');
  }

  return (
    <>
      <main data-theme={isToggled} className='bg-primary/10'>
        <button onClick={handleToggle}>toggle</button>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Home />
        </div>
      </main>
    </>
  )
}

export default App
