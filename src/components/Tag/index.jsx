import {} from "react-icons/ri"
import { Container } from "./styles"

export function Tag({ title, ...rest }) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}
