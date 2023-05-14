import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Box bg="gray.100" minH="100vh" py={16}>
          <Flex
            as="main"
            justifyContent="flex-start"
            flexDirection="column"
            m="10 auto"
            alignItems="center"
          >
            HOLAAAAA
            {/* {data?.data?.map((post) => (
              <Post key={post._id} post={post} />
            ))} */}
          </Flex>
        </Box>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
