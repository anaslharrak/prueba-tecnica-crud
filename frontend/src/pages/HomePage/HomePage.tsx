import { useEffect, useState } from "react"
import { Container, Icon, LoadingMessage, ReloadIcon } from "./style"
import type { User } from "../../types";
import { UserCard } from "../../components/exports";
import { useNavigate } from "react-router-dom";
import { fetchUsersAndReload } from "../../utils";

const HomePage = () => {
    
    const [users, setUsers] = useState<User[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        handleFetch()

    }, [])

    const handleFetch = () => {
        fetchUsersAndReload()
        .then((users) => {
        setUsers(users)
    })        
      }      

    const handleAddButton = () => {
        navigate('/api/user/create');
      };
      

    return (
        <>
            <Container>
                <Icon  onClick={handleAddButton} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </Icon>


                <ReloadIcon onClick={handleFetch} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
                </ReloadIcon>


                {
                    users.length === 0 
                        ? <LoadingMessage>Loading...</LoadingMessage> 
                        : users.map((user, index) => (
                            <UserCard key={index} user={user} handleFetch={handleFetch} />
                    ))  
                }
            </Container>

        </>
                
    )
}

export default HomePage