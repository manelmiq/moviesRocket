import { FiSearch } from 'react-icons/fi';
import { Container, Profile, UserProfile } from "./styles";
import { Input } from "../input/index.jsx";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import {useContext} from "react";
import {DataContext} from "../../context/DataContex.jsx";

export function Header() {
  const { signOut, user } = useAuth();
  const { data , setData } = useContext(DataContext)
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input
        type="text"
        placeholder="Search"
        icon={FiSearch}
        onChange={(e) => {
          setData({...data, search: e.target.value});
        }}
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