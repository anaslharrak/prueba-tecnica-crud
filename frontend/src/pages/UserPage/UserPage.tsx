import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { API_URL } from "../../constants";
import { toast } from "sonner";
import type { User } from "../../types";
import { Card, Title, Subtitle, Text, Section, Label } from "./style";

interface Data {
    user: User;

}

const UserPage = () => {

    const [data, setData] = useState<Data>();
    const { id } = useParams();
    const [formattedDate, setFormattedDate] = useState<string>();

    useEffect(() => {
        fetch(`http://${API_URL}/api/user/${id}`)
            .then(response => response.json())
            .then(data => {                
                setData(data);
                if (data.user.creationDate) {
                    setFormattedDate(new Date(data.user.creationDate).toLocaleDateString());
                }
                console.log(data.user.genre);
                
            })
            .catch(error => toast.error('Error fetching user: ' + error.message || 'Unknown error'))
    }, [id]);
    
    return (
        data === undefined
          ? <Title>Loading...</Title>
          : data === null || Object.keys(data).length === 0
            ? <Title>User not found or empty</Title>
            : <Card>
                <Title>{`${data.user.name} ${data.user.surname}`}</Title>
                <Section>
                  <Subtitle>Contact Information</Subtitle>
                  <Text><Label>Email:</Label> {data.user.email || 'N/A'}</Text>
                  <Text><Label>Phone:</Label> {data.user.phone || 'N/A'}</Text>
                </Section>
                <Section>
                  <Subtitle>Personal Information</Subtitle>
                  <Text><Label>Birth Date:</Label> {formattedDate}</Text>
                  <Text><Label>Genre:</Label> {data.user.genre}</Text>
                </Section>
                <Section>
                  <Subtitle>Address</Subtitle>
                  <Text><Label>Street:</Label> {data.user.address.street || 'N/A'}</Text>
                  <Text><Label>City:</Label> {data.user.address.city}</Text>
                  <Text><Label>Postal Code:</Label> {data.user.address.postalCode || 'N/A'}</Text>
                  <Text><Label>Country:</Label> {data.user.address.country}</Text>
                </Section>
                <Section>
                  <Subtitle>Profile</Subtitle>
                  <Text><Label>Register Date:</Label> {formattedDate}</Text>
                </Section>
              </Card>
      );
}

export default UserPage