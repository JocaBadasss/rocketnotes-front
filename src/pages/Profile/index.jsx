import { useState } from "react"
import { Container, Form, Avatar } from "./styles"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../service/api"
import { ButtonText } from "../../components/ButtonText"
import { useNavigate } from "react-router-dom"


export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPassworldOld] = useState("")
  const [passwordNew, setPasswordNew] = useState("")

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()


    function handleBack(){
    navigate(-1)
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <button
          type="button"
          onClick={handleBack}
        >
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>
          <img
            src={avatarUrl}
            alt="User picture"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>
        <Input
          placeholder="Username"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Old password"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassworldOld(e.target.value)}
        />
        <Input
          placeholder="New password"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button
          title="Save"
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  )
}
