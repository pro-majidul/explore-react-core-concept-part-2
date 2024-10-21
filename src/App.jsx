
import './App.css'
import UseState from './useState'
import Students from './student'
import Friends from './friends'


function App() {

  function handleClick (){
    alert('hellow')
  }
  function handerFourth(n){
    alert(n+5)
  }

  return (
    <>
      
      <Students></Students>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <UseState></UseState>

      <button onClick={handleClick}>first</button>
      <button onClick={function handelSecond(){alert('hellow second')}}>Second</button>
      <button onClick={()=>{alert('hello third btn')}}>Third</button>
      <button onClick={()=>handerFourth(56)}>Fourth</button>

    </>
  )
}

export default App
