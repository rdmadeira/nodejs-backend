import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Divider,
  Flex,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from 'react-query';

const FormTodo = () => {
  const toast = useToast();
  const [formData, setformData] = useState({ title: '', description: '' });
  const queryClient = useQueryClient(); // Hook que nos trae el cliente.
  const mutation = useMutation(
    // (function, object with callbacks to handle post fetch responses)
    (newTodo) =>
      fetch('http://localhost:5001/api/v1/todo', {
        headers: {
          'Content-Type': 'application/json', // tiene que especificar el content type para recibir el json
        },
        method: 'POST',
        body: JSON.stringify(newTodo),
      }),
    {
      onSuccess: (newtodo) => {
        queryClient.invalidateQueries('todos'); // - Forza el refetch para actualizar el render con el nuevo Todo!!!!
        newtodo.json().then((data) => {
          const creadoEn = new Date(data.data.createdAt).toLocaleString();
          toast({
            status: 'success',
            title: 'Creado correctamente',
            description: 'Creado el ' + creadoEn,
          });
        });
        setformData({ title: '', description: '' });
      },
    }
  );

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
          <Input
            type="text"
            onChange={(e) =>
              setformData({ ...formData, title: e.target.value })
            }
            value={formData.title}
          />
        </FormControl>
        <FormControl id="todo" w={'80%'}>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            onChange={(e) =>
              setformData({ ...formData, description: e.target.value })
            }
            value={formData.description}
          />
        </FormControl>
        <Divider color={'ActiveBorder'} />
        <Button
          bg="#7928CA"
          color={'white'}
          fontWeight="600"
          _hover={{ bg: '#9e47f5', fontWeight: '700' }}
          alignSelf="end"
          size={'sm'}
          onClick={() => mutation.mutate(formData)}
        >
          Crear Todo
        </Button>
      </Flex>
    </Box>
  );
};

export default FormTodo;
