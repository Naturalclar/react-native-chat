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

class LoginScreen extends Component<Props, State> {
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
        <Input label="email" keyboardType="email" />
        <Input label="password" keyboardType="password" />
        <Button onPress={() => {}}>Login</Button>
        <Text>
          New User?{' '}
          <Text style={styles.blue} onPress={() => {}}>
            Sign Up
          </Text>
        </Text>
      </View>
    )
  }
}

export default LoginScreen
