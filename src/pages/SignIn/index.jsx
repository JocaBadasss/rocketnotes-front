import { useState } from "react"
import { FiMail, FiLock } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { Container, Form, Background } from "./styles"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>An App to save and manage your links</p>

        <h2>Sign in</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          title="Sign In"
          onClick={handleSignIn}
        />

        <Link to="/register">Sign up</Link>
      </Form>

      <Background />
    </Container>
  )
}
