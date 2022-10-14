import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import About from './components/About'
import TeacherLogin from './components/TeacherLogin'
import TeacherRegister from './components/TeacherRegister'
import AddImages from './components/AddImages'
import Images from './components/Images'
import Introduction from './components/Introduction'
import useConfigureFoods from './hooks/useConfigureFoods'
import DragAndDrop from './components/DragAndDrop'
import GoBackToHome from './components/GoBackToHome'
import './App.scss'
import Error from './components/Error'
import useKeyPress from './hooks/useKeyPress'
import { useEffect, useState } from 'react'

function App() {

  const errorMsg = useConfigureFoods()
  const keyPressed = useKeyPress('Escape')
  const [showGoBackToHome, setShowBackToHome] = useState(false)

  useEffect(() => {
    setShowBackToHome(true)
  }, [keyPressed])

  useEffect(() => {
    setShowBackToHome(false)
  }, [])

  return (
    <div className='App'>
      {
        errorMsg !== null ?
          <Error msg={errorMsg} />
          :
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/introduction' element={<Introduction />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/drag-and-drop' element={<DragAndDrop />} />
            <Route path='/login' element={<TeacherLogin />} />
            <Route path='/register' element={<TeacherRegister />} />
            <Route path='/about' element={<About />} />
            <Route path='/images' element={<Images />} />
            <Route path='/add-images' element={<AddImages />} />
          </Routes>
      }

      {
        showGoBackToHome && (
          <GoBackToHome hideComponent={() => setShowBackToHome(false)} />
        )
      }

    </div>
  )
}

export default App
