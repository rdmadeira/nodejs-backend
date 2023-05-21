import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Divider,
  Flex,
  Button,
} from '@chakra-ui/react';

const FormTodo = () => {
  return (
    <Box
      width="600px"
      borderWidth="1px"
      borderRight={'lg'}
      overflow="hidden"
      bg={'white'}
      mg={5}
      shadow={'base'}
      rounded="md"
      m="5"
    >
      <Flex
        direction={'column'}
        justifyContent={'center'}
        align={'center'}
        padding={'6'}
        rowGap="3"
      >
        <FormControl id="title" w={'80%'}>
          <FormLabel>Title</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="todo" w={'80%'}>
          <FormLabel>Description</FormLabel>
          <Input type="text" />
        </FormControl>
        <Divider color={'ActiveBorder'} />
        <Button
          bg="#7928CA"
          color={'white'}
          fontWeight="600"
          _hover={{ bg: '#9e47f5', fontWeight: '700' }}
          alignSelf="end"
          size={'sm'}
        >
          Crear Todo
        </Button>
      </Flex>
    </Box>
  );
};

export default FormTodo;
