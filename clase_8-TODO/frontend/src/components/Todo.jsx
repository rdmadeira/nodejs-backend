import React from 'react';
import { Button, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useMutation, useQueryClient } from 'react-query';

const Todo = ({ todo }) => {
  const queryClient = useQueryClient();

  const mutationPut = useMutation(
    ({ id, isCompleted }) =>
      fetch('http://localhost:5001/api/v1/todo', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, isCompleted }),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  const mutationDel = useMutation(
    ({ id }) =>
      fetch('http://localhost:5001/api/v1/todo/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  const completeTodoHandle = (todo) => {
    mutationPut.mutate({ id: todo._id, isCompleted: true });
    /* console.log(todo); */
  };

  const deleteTodoHandle = (todo) => {
    mutationDel.mutate({ id: todo._id });
  };
  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: '-5px' }}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <Box
        width="300px"
        borderWidth="1px"
        borderRight={'lg'}
        overflow="hidden"
        bg={'white'}
        mg={5}
      >
        <Box
          p="6"
          display="flex"
          flexDirection="column"
          opacity={todo.isCompleted ? 0.5 : 1}
        >
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
            onClick={() => completeTodoHandle(todo)}
            isDisabled={todo.isCompleted ? true : false}
          >
            Complete!!
          </Button>
          <Button
            bg="#7928CA"
            mt="10"
            color={'white'}
            fontWeight="600"
            _hover={{ bg: '#9e47f5', fontWeight: '700' }}
            onClick={() => deleteTodoHandle(todo)}
          >
            Delete!!
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Todo;
