import React from 'react';
import {
  Flex,
  Box,
  Text,
  Icon
} from 'pcln-design-system';

const Guest = ({
  name,
  index,
  onRemove
}) => (
  <Flex my={4}>
    <Box w={0.5}>
      <Text>
        #{index + 1}
      </Text>
    </Box>
    <Box w={0.5}>
      <Text>
        {name}
      </Text>
    </Box>
    <Icon
      onClick={onRemove}
      name='close' color='red' size={24}
    />
  </Flex>
);

export default Guest;
