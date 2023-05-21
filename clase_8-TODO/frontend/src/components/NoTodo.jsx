import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const NoTodo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: '-5px' }}
      style={{ display: 'flex', justifyContent: 'center', width: '75%' }}
    >
      <Box
        width="300px"
        borderWidth="1px"
        borderRight={'lg'}
        overflow="hidden"
        bg={'white'}
        mg={5}
      >
        <Box p="6" display="flex" flexDirection="column">
          <Text>No hay ninguna tarea aquí, create un Todo</Text>
        </Box>
      </Box>
    </motion.div>
  );
};

export default NoTodo;
