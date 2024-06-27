import { FiSearch } from 'react-icons/fi';
import { Container, Profile, UserProfile } from "./styles";
import { Input } from "../../components/input";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header() {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input
        type="text"
        placeholder="Search"
        icon={FiSearch}
      />
      <Profile>
        <section>
          <h2>
            <UserProfile to="/profile"> {user.name} </UserProfile>
          </h2>
          <a 
            onClick={signOut}
            to="/"
          >log out</a>
        </section>

        <img src={avatarUrl} alt="user photo" />
      </Profile>
    </Container>
  )
}