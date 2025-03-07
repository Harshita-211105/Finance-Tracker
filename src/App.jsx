import './App.css'

function App() {

  return (
    // <div className='flex flex-col justify-center items-center h-screen w-screen
    // absolute inset-0 bg-matteBlack'>
    //   <h1 className='font-quantico text-7xl text-center text-lightGreen drop-shadow-2xl'>You Earned It — Now Manage It Like a Pro!</h1>
    //   <h3 className='mt-6 tracking-widest'>An AI-Driven Platform to Manage, Save, and Grow Your Money Effortlessly.</h3>
    // </div>

    <div className="relative min-h-screen  items-center justify-center bg-black overflow-hidden">
      <div className='w-screen h-16 bg-white'></div>
      <div className="flex flex-col justify-center items-center absolute inset-0 bg-gradient-to-t from-green-400 to-green-950 opacity-90" >
        <h1 className="relative text-beige text-7xl text-center font-quantico font-bold">You Earned It — Now Manage It Like a Pro!</h1>
        <h3 className='text-slate-600 tracking-widest mt-6 text-2xl opacity-100'>An AI-Driven Platform to Manage, Save, and Grow Your Money Effortlessly.</h3>
      </div>
    </div>

  )
}

export default App
