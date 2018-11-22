import * as React from 'react'
import { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Input, Button } from '../components'

type Props = {}
type State = {
  email: string
  password: string
}

const styles = StyleSheet.create({
  blue: {
    color: 'blue',
  },
})

class SignupScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  render() {
    return (
      <View>
        <Input value={email} label="email" keyboardType="email" />
        <Input label="verify email" keyboardType="email" />
        <Input label="password" keyboardType="password" />
        <Button onPress={() => {}}>Signup</Button>
        <Text>
          Already a user?{' '}
          <Text style={styles.blue} onPress={() => {}}>
            Login
          </Text>
        </Text>
      </View>
    )
  }
}

export default SignupScreen
