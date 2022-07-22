import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const { theme, setTheme } = useTheme();

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };

  return (
    <div className={`flex ${isOn ? 'justify-start' : 'justify-end'} items-center p-2 cursor-pointer w-12 h-8 bg-primary dark:bg-secondary`} data-isOn={isOn} onClick={() => { toggleSwitch(); setTheme(theme === 'dark' ? 'light' : 'dark'); }}>
      <motion.div className='w-4 h-4 bg-secondary dark:bg-primary' layout transition={spring} />
    </div>
  );
};

export default Switch;