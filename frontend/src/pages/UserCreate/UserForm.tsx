import { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Title,
  Input,
  Label,
  Button,
  CancelButton,
  Form,
  Select
} from './style.ts';
import { toast } from 'sonner';
import { API_URL } from '../../constants.ts';
import { useGoHomePage } from '../../hooks/useGoHomePage.ts';
import { useParams } from 'react-router-dom';

const UserEditForm = () => {
  const goHomePage = useGoHomePage();
  const [user, setUser] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    birthDate: '',
    genre: '',
    address: {
      street: '',
      city: '',
      postalCode: '',
      country: '',
    },
  });

  const { id } = useParams();

  useEffect(() => {
    if(!id || id === undefined) return;
    const fetchUser = async () => {
      const response = await fetch(`http://${API_URL}/api/user/${id}`);
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
      } else {
        toast.error(data.error || 'Error fetching user data.');
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes('address.')) {
      const key = name.split('.')[1];
      setUser(prevState => ({
        ...prevState,
        address: {
          ...prevState.address,
          [key]: value,
        },
      }));
    } else {
      setUser(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const method = id === undefined ? 'POST' : 'PUT';
    const endpoint = id === undefined ? '' : `/${id}`;

    const response = await fetch(`http://${API_URL}/api/user${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    if (!response.ok) {
      toast.error(data.error || 'Unknown error.');
    } else {
      const state = id === undefined ? 'created' : 'updated';
      toast.success(`User ${state} successfully!`);
      goHomePage();
    }
  };

  return (
    <Container>
      <Card>
        <Title>{id === undefined ? 'Register' : 'Edit'} User</Title>
        <Form onSubmit={handleSubmit} id='form-edit-user'>
          <Label>Name</Label>
          <Input type="text" name="name" value={user.name} onChange={handleChange} />

          <Label>Surname</Label>
          <Input type="text" name="surname" value={user.surname} onChange={handleChange} />

          <Label>Email</Label>
          <Input type="email" name="email" value={user.email} onChange={handleChange} />

          <Label>Phone</Label>
          <Input type="text" name="phone" value={user.phone} onChange={handleChange} />

          <Label>Birth Date</Label>
          <Input type="date" name="birthDate" value={user.birthDate} onChange={handleChange} />

          <Label>Genre</Label>
          <Select name="genre" value={user.genre} onChange={handleChange}>
            <option value="">Select Genre</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Select>

          <Label>Street</Label>
          <Input type="text" name="address.street" value={user.address.street} onChange={handleChange} />

          <Label>City</Label>
          <Input type="text" name="address.city" value={user.address.city} onChange={handleChange} />

          <Label>Postal Code</Label>
          <Input type="text" name="address.postalCode" value={user.address.postalCode} onChange={handleChange} />

          <Label>Country</Label>
          <Input type="text" name="address.country" value={user.address.country} onChange={handleChange} />
        </Form>

        <Button type="submit" form='form-edit-user'>Submit</Button>
        <CancelButton onClick={goHomePage}>Cancelar</CancelButton>
      </Card>
    </Container>
  );
};

export default UserEditForm;
