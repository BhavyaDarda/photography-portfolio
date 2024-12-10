import '../styles/globals.css';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      variants={{
        pageInitial: { opacity: 0 },
        pageAnimate: { opacity: 1 },
        pageExit: { opacity: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;