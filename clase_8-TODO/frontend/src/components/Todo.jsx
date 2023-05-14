import React from 'react';
import { Button, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Todo = ({ todo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: '-5px' }}
      style={{ display: 'flex', justifyContent: 'center', width: '75%' }}
    >
      <Box
        width="100%"
        borderWidth="1px"
        borderRight={'lg'}
        overflow="hidden"
        bg={'white'}
        mg={5}
      >
        <Box p="6" display="flex" flexDirection="column">
          <Text as="h1" fontSize="25px" fontWeight="600">
            {todo.title}
          </Text>
          <Text>{todo.description}</Text>

          <Button
            bg="#7928CA"
            mt="10"
            color={'white'}
            fontWeight="600"
            _hover={{ bg: '#9e47f5', fontWeight: '700' }}
          >
            Ver Post
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Todo;
