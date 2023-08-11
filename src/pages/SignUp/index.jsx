import { useState } from "react"

import { api } from "../../service/api"

import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link, useNavigate } from "react-router-dom"

import { Container, Form, Background } from "./styles"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignUp() {
    if(!name || !email || !password) {
     return alert("Fill in all fields")
    }

    api.post("/users", {email, name, password})
    .then(() => {
      alert("User created successufully!")
      Navigate("/")
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Something went wrong, user not created")
      }
    })
  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>An App to save and manage your links</p>

        <h2>Create your account</h2>

        <Input
          placeholder="Username"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

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
          title="Sign Up"
          onClick={handleSignUp}
        />

        <Link to="/">Back to login</Link>
      </Form>
    </Container>
  )
}
