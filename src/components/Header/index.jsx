import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles"
import { useAuth } from "../../hooks/auth"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { api } from "../../service/api"

export function Header() {
  const { signOut, user } = useAuth()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <Profile to="/profile">
        <img
          src={avatarUrl}
          alt="User picture"
        />

        <div>
          <span>Welcome,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
