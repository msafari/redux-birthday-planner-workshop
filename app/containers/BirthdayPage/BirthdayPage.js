import React from 'react';
import { connect } from 'react-redux';
import Guest from 'components/Guest';
import {
  Flex,
  Text,
  Box,
  Heading,
  Label,
  Input,
  Divider,
  GreenButton
} from 'pcln-design-system';
import { addGuest, increment } from '../../actions'

class BirthdayPage extends React.Component {
  constructor(props) {
    super(props);
    this.updateCurrentGuestInput = this.updateCurrentGuestInput.bind(this);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.state = {
      newGuestName: ''
    };
  }

  updateCurrentGuestInput(e) {
    this.setState({
      newGuestName: e.target.value
    })
  }

  handleInputClick () {
    const {
      addGuest,
      increment
    } = this.props

    addGuest(this.state.newGuestName);
    increment();
  }

  render() {
    const {
      guests,
      numOfGuests
    } = this.props
    return (
      <Box>
        <Box my={3}>
          <Label htmlFor='guest-name' fontSize={2} mb={1}>
            New Guest:
          </Label>
          <Flex justify='space-between'>
            <Input
              id='guest-name'
              onChange={this.updateCurrentGuestInput}
              name='guest-name'
              defaultValue='Enter Guest Name'
            />
            <Box w={0.25}>
              <GreenButton onClick={this.handleInputClick}>
                Add Guest
              </GreenButton>
            </Box>
          </Flex>
        </Box>
        <Heading.h3>
          Total Number of Guests: {numOfGuests}
        </Heading.h3>
        <Divider mt={4} />
        <Flex>
          <Box w={0.5}>
            <Text bold>
              Guest Number
            </Text>
          </Box>
          <Box w={0.5}>
            <Text bold>
              Guest Name
            </Text>
          </Box>
        </Flex>
        <Divider mb={4} />
        {
          guests && guests.length > 0 &&
          guests.map((name, index) => (
            <Guest
              key={`guest-${name}`}
              name={name}
              index={index}
            />
          ))
        }
      </Box>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addGuest: (name) => dispatch(addGuest(name)),
  increment: () => dispatch(increment())
});

const mapStateToProps = (state) => ({
  guests: state.global.guestList,
  numOfGuests: state.global.guestCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BirthdayPage);
