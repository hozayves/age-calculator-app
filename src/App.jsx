import AgeInput from "./components/AgeInput"
import AgeOutput from "./components/AgeOutput"
function App() {

  return (
    <main className='flex justify-center items-center h-screen w-full bg-OffWhite'>
      <div className='bg-white w-[90%] h-auto rounded-3xl rounded-br-[150px] px-4 py-7 sm:w-[420px] md:p-7'>
        <AgeInput />
        <AgeOutput />
      </div>
    </main>
  )
}

export default App
