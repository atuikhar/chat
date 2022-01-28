import React from 'react'
import { Link } from 'react-router-dom'
import { Div, Div1, Title, Text, Button } from './WelcomeStyles'

const Welcome = () => {
  return (
    <Div>
      <Div1>
        <Title>Welcome to Chat</Title>

        <Text>This is a chat app</Text>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </Div1>
    </Div>
  )
}
export default Welcome
