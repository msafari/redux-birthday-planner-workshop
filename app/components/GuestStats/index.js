import React from 'react';
import {
  Flex,
  Box,
  Text,
  Icon,
  Divider,
  Card
} from 'pcln-design-system';

const GuestStats = ({
  totalGuests,
  numConfirmed
}) => (
  <Card>
    <Flex justify='space-around'>
      <Box p={2} w={0.5} bg='lightGray'>
        <Text bold>
          Total Invited: {totalGuests}
        </Text>
      </Box>
      <Box p={2} w={0.5} bg='lightGreen'>
        <Text bold>
          Total Confirmed: {numConfirmed}
        </Text>
      </Box>
    </Flex>
  </Card>
);

export default GuestStats;
