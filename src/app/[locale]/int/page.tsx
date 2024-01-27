'use client';
import { Box, useDisclosure } from '@chakra-ui/react';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Form from './Form';

interface InternalProps {
  // Add any props needed for the Internal component
}

const Internal: React.FC<InternalProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={[4, 8, 16]}>
      <h1>Internal Page</h1>
      <p>This is the internal page content.</p>
      <Box mt={4}>
        <Button variant='solid' onClick={() => console.log('Clicked!')}>solid</Button>
        <Button variant='secondary' onClick={() => console.log('Clicked!')}>secondary</Button>
        <Button variant='outline'>outline</Button>
        <Button variant='ghost'>ghost</Button>
        <Button variant='link'>link</Button>
      </Box>
      <Box mt={4}>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <p>Modal Content</p>
        </Modal>
      </Box>
      <Box mt={4}>
        <Form />
      </Box>
    </Box>
  );
};

export default Internal;
