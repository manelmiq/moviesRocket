import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Container, Form, Avatar } from './styles';
import { ButtonText } from '../../components/buttonText';
import { Input } from '../../components/input';
import { Button } from '../../components/button';

import { api } from '../../services/api';
import {useState} from 'react';
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Profile() {
  const {user, updateProfile} = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }

    await updateProfile({user, avatarFile});

  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);

  }

  return(
    <Container>
      <header>
        <ButtonText title='Back' icon={FiArrowLeft} to="/" />
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="" />
          <label htmlFor="avatar">
            <FiCamera/>
          </label>
          <input type="file" id='avatar' onChange={handleChangeAvatar} />
        </Avatar>
        <Input
          type="text"
          placeholder="Name"
          icon={FiUser}
          value={name}
          onChange={ e => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Mail"
          icon={FiMail}
          value={email}
          onChange={ e => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Current password"
          icon={FiLock}
          onChange={ e => setOldPassword(e.target.value)}
        />
        <Input
          type="text"
          placeholder="New password"
          icon={FiLock}
          onChange={ e => setNewPassword(e.target.value)}
        />

        <Button title="Save" onClick={handleUpdate} />
      </Form>

    </Container>
  )
}