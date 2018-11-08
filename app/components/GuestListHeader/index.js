import React from 'react';
import {
  Flex,
  Box,
  Text,
  Icon,
  Divider
} from 'pcln-design-system';

const GuestListHeader = () => (
  <Box bg='lightGray'>
    <Flex py={3}>
      <Box w={0.1} align='center'>
        <Text bold>
          #
        </Text>
      </Box>
      <Box w={0.5} align='center'>
        <Text bold>
          Guest Name
        </Text>
      </Box>
      <Box w={0.2} align='center'>
        <Text bold>
          Confirm
        </Text>
      </Box>
      <Box w={0.2} align='center'>
        <Text bold>
          Decline
        </Text>
      </Box>
    </Flex>
    <Divider m={0}/>
  </Box>
);

export default GuestListHeader;
