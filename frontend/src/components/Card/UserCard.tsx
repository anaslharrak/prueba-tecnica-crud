import { Card, IconContainer, IconEdit, IconDelete, InfoContainer, Heading, Paragraph } from "./style";
import type { User } from "../../types";
import { HandleDelete } from "../../utils";
import { useHandleSeeMoreDetails } from "../../hooks/useSeeMoreDetailsUser";
import { useHandleEdit } from "../../hooks/useEditUser";
interface UserCardProps {
    user: User;
  }
  
const UserCard: React.FC<UserCardProps> = ({ user }: { user: User }) => {
    const formattedDate = new Date(user.creationDate).toLocaleDateString();

    const HandleSeeMoreDetails = useHandleSeeMoreDetails();
    const HandleEdit = useHandleEdit();
    return (
      <>
        
        <Card onClick={() => HandleSeeMoreDetails(user._id)}>
          <IconContainer>
            <IconDelete 
              onClick={(event) => { event.stopPropagation(); HandleDelete(user); }} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
            </IconDelete>

            <IconEdit 
              onClick={(event) => { event.stopPropagation(); HandleEdit(user._id);}} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor" 
              className="size-5"
            >
              <path fillRule="evenodd" d="M19 5.5a4.5 4.5 0 0 1-4.791 4.49c-.873-.055-1.808.128-2.368.8l-6.024 7.23a2.724 2.724 0 1 1-3.837-3.837L9.21 8.16c.672-.56.855-1.495.8-2.368a4.5 4.5 0 0 1 5.873-4.575c.324.105.39.51.15.752L13.34 4.66a.455.455 0 0 0-.11.494 3.01 3.01 0 0 0 1.617 1.617c.17.07.363.02.493-.111l2.692-2.692c.241-.241.647-.174.752.15.14.435.216.9.216 1.382ZM4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
            </IconEdit>


          </IconContainer>
          
          <InfoContainer>
            <Heading>{user.name} {user.surname}</Heading>
            <Paragraph>Email: {user.email ? user.email : 'No email provided'}</Paragraph>
            <Paragraph>Address: {`${user.address.street ? user.address.street : "Address not found"}, ${user.address.city}, ${user.address.country}`}</Paragraph>
            <Paragraph>Creation Date: {formattedDate}</Paragraph>
          </InfoContainer>
        </Card>

    </>
    );

}

export default UserCard;