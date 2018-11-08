import React from 'react';
import { connect } from 'react-redux';
import Guest from 'components/Guest';
import GuestStats from 'components/GuestStats';
import GuestListHeader from 'components/GuestListHeader';
import {
  Flex,
  Text,
  Box,
  Heading,
  Label,
  Input,
  Divider,
  GreenButton,
  Card
} from 'pcln-design-system';
import { addGuest, increment, confirmGuest, declineGuest } from '../../actions'

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
      confirm,
      decline
    } = this.props
    return (
      <Box>
        <GuestStats />
        <Card my={3} px={3} py={4}>
          <Label htmlFor='guest-name' fontSize={2} mb={1}>
            New Guest:
          </Label>
          <Flex>
            <Input
              id='guest-name'
              onChange={this.updateCurrentGuestInput}
              name='guest-name'
              placeholder='Enter guest name...'
            />
            <Box w={0.25}>
              <GreenButton fullWidth onClick={this.handleInputClick}>
                Add Guest
              </GreenButton>
            </Box>
          </Flex>
        </Card>
        <Card mt={4}>
          <GuestListHeader />
          {
            guests &&
            Object.keys(guests).map((name, index) => {
              const green = guests[name].confirmed && 'lightGreen'
              const red = guests[name].declined && 'lightRed'
              return (
                <Guest
                  key={`guest-${name}-${green}-${red}`}
                  name={name}
                  alreadyDeclined={guests[name].declined}
                  alreadyConfirmed={guests[name].confirmed}
                  onConfirm={() => confirm(name)}
                  onDecline={() => decline(name)}
                  bg={green || red}
                  guestNumber={index + 1}
                />
              )
            })
          }
        </Card>
      </Box>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addGuest: (name) => dispatch(addGuest(name)),
  increment: () => dispatch(increment()),
  confirm: (name) => dispatch(confirmGuest(name)),
  decline: (name) => dispatch(declineGuest(name))
});

const mapStateToProps = (state) => ({
  guests: state.global.guestList
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BirthdayPage);
