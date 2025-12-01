import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function DashboardLoader() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;

    setVisible(true);
    setProgress(0);

    timer = setInterval(() => {
      setProgress((prev) => Math.min(prev + Math.random() * 5 + 2, 95));
    }, 200);

    const finishTimeout = setTimeout(() => {
      clearInterval(timer);
      setProgress(100);
      setTimeout(() => setVisible(false), 300);
    }, 500);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimeout);
      setProgress(0);
      setVisible(false);
    };
  }, [location]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ width: 0, opacity: 1 }}
          animate={{ width: `${progress}%`, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          className="fixed top-0 left-0 h-[3px] bg-primary z-[9999]"
        />
      )}
    </AnimatePresence>
  );
}
