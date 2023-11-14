import './App.css'
import Counter from "./components/counter.tsx";

function App() {

  return (
    <>
      <p>Stopwatch</p>
      <Counter seconds={3} />
    </>
  )
}

export default App
