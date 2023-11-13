import { motion } from 'framer-motion';

import reactLogo from './assets/react.svg';

function App() {
  return (
    <main className='flex h-full w-full flex-col items-center justify-center'>

      <section className='flex flex-col items-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2}}
          whileHover={{ scale: 1.2 }}
        >
          <img src={reactLogo} className='h-24 w-24' alt='React logo' />
        </motion.div>
        <p>Hover me !</p>
      </section>
        
    </main>
  );
}

export default App;
