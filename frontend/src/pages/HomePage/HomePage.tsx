import { useEffect, useState } from "react"
import { Container, Icon, LoadingMessage } from "./style"
import type { User } from "../../types";
import { UserCard } from "../../components/exports";
import { API_URL } from "../../constants";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    
    const [users, setUsers] = useState<User[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://${API_URL}/api/users`)
            .then(response => response.json())
            .then(data => setUsers(data.users))
            .catch(error => console.error(error))
    })

    const handleAddButton = () => {
        navigate('/api/user/create');
      }
    
    return (
        <>
            <Container>
                <Icon onClick={handleAddButton} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
                </Icon>

                {
                    users.length === 0 
                        ? <LoadingMessage>Loading...</LoadingMessage> 
                        : users.map((user, index) => (
                            <UserCard key={index} user={user} />
                    ))  
                }
            </Container>

        </>
                
    )
}

export default HomePage