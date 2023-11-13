import reactLogo from './assets/react.svg';

function App() {
  return (
    <main className='flex h-full w-full flex-col items-center justify-center'>
      <section className='flex flex-col items-center'>
        <img src={reactLogo} className='h-24 w-24' alt='React logo' />
        <h2 className='text-3xl'>Vite + React + TypeScript + Tailwind</h2>
      </section>
    </main>
  );
}

export default App;
