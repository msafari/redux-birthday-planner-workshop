import React from 'react';
import {
  Flex,
  Box,
  Text,
  IconButton,
  Divider
} from 'pcln-design-system';

const Guest = ({
  name,
  guestNumber,
  onDecline,
  onConfirm,
  bg,
  alreadyDeclined,
  alreadyConfirmed
}) => (
  <Box bg={bg}>
    <Flex py={4}>
      <Box w={0.1} align='center'>
        <Text>
          {guestNumber}
        </Text>
      </Box>
      <Box w={0.5} align='center'>
        <Text>
          {name}
        </Text>
      </Box>
      <Box w={0.2} align='center'>
        <IconButton
          disabled={alreadyConfirmed}
          onClick={onConfirm}
          name='check'
          color={alreadyConfirmed ? 'gray' : 'green'}
          size={24}
        />
      </Box>
      <Box w={0.2} align='center'>
        <IconButton
          disabled={alreadyDeclined}
          onClick={onDecline}
          name='close'
          color={alreadyDeclined ? 'gray' : 'red'}
          size={24}
        />
      </Box>
    </Flex>
    <Divider m={0}/>
  </Box>
);

export default Guest;
