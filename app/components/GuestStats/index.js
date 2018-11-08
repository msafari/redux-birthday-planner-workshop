import React from 'react';
import {
  Flex,
  Box,
  Text,
  Icon,
  Divider,
  Card
} from 'pcln-design-system';
import { connect } from 'react-redux';


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

const mapStateToProps = (state) => ({
  totalGuests: state.global.guestCount,
  numConfirmed: state.global.numConfirmed
});

export default connect(mapStateToProps)(GuestStats);
