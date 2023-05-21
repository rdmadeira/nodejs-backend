import { useQuery } from 'react-query';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import Todo from './components/Todo.jsx';
import FormTodo from './components/FormTodo.jsx';
import NoTodo from './components/NoTodo.jsx';

const fn = () => {
  return fetch('http://localhost:5001/api/v1/todo').then((data) => data.json());
};

function App() {
  const { isLoading, isError, data, error } = useQuery('todos', fn);
  console.log(data?.data);
  return (
    <ChakraProvider>
      <Box bg="gray.100" minH="100vh" py={16}>
        <Flex
          as="main"
          justifyContent="flex-start"
          flexDirection="column"
          m="10 auto"
          alignItems="center"
        >
          <FormTodo />
          {isLoading ? <div>Loading...</div> : null}
          {data?.data.length > 0 ? (
            data.data.map((todo) => <Todo key={todo._id} todo={todo} />)
          ) : (
            <NoTodo />
          )}

          {/* {data?.data?.map((post) => (
              <Post key={post._id} post={post} />
            ))} */}
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
