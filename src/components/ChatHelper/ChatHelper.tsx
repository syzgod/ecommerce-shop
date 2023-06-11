import React from 'react';
import { BsFillChatSquareTextFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const ChatHelper = () => {
  return (
    <motion.div className='chat-container'>
      <BsFillChatSquareTextFill size={50} />
    </motion.div>
  );
};

export default ChatHelper;
