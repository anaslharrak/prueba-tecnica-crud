import { Card, IconContainer, Icon } from "./style";
import type { User } from "../../types";
import { toast } from "sonner";
import { API_URL } from "../../constants";
import { useNavigate } from "react-router-dom";

interface UserCardProps {
    user: User;
  }
  
const UserCard: React.FC<UserCardProps> = ({ user }: { user: User }) => {
    const formattedDate = new Date(user.creationDate).toLocaleDateString();
    const navigate = useNavigate();

    const handleClickDeleteButton = () => {
      toast.warning(`User ${user.name} ${user.surname} will be deleted, are you sure?`, 
        {
          action: {
            label: 'Delete',
            onClick: () => deleteUser()
          },
        }
      );
    }

    const deleteUser = () => {
      console.log(user._id);
      
      fetch(`http://${API_URL}/api/user/${user._id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (!response.ok) throw new Error('Failed to delete user');
          return response.json();
        })
        .then(() => {
          toast.warning('User deleted');
        })
        .catch(error => {
          console.error(error);
          toast.error('Error deleting user: ' + error.message || 'Unknown error');
        });
    };

    const handleClickEditButton = () => {
      console.log(`User ${user.name} ${user.surname} edited`);
    } 

    const handleSeeMoreDetails = () => {
      navigate(`/api/user/${user._id}`);
    }

    return (
      <>
        
        <Card onClick={handleSeeMoreDetails}>
          <IconContainer>

          <Icon onClick={(event) => { event.stopPropagation(); handleClickDeleteButton(); }} xmlns="http://www.w3.org/2000/Icon" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
          </Icon>

            <Icon onClick={(event) => { event.stopPropagation(); handleClickEditButton()}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </Icon>

          </IconContainer>
          
          <h1>{user.name} {user.surname}</h1>
          <p>Email: {user.email ? user.email : 'No email provided'}</p>
          <p>Address: {`${user.address.street ? user.address.street : "Address not found"}, ${user.address.city}, ${user.address.country}`}</p>
          <p>Creation Date: { formattedDate }</p>
        </Card>
    </>
    );

}

export default UserCard;