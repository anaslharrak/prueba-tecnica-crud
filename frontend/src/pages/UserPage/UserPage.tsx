import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { API_URL } from "../../constants";
import { toast } from "sonner";
import type { User } from "../../types";

const UserPage = () => {

    const [user, setUser] = useState<User>();
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://${API_URL}/api/user/${id}`)
            .then(response => response.json())
            .then(data => setUser(data.user))
            .catch(error => toast.error('Error fetching user: ' + error.message || 'Unknown error'))
    });

    return (
        user === undefined
            ? <h1>Loading...</h1>
            : user === null
                ? <h1>User not found</h1>
                : <div>
                    <h1>{user?.name}</h1>
                    <h1>{user?.surename}</h1>
                    <h1>{`${user?.address.city}, ${user?.address.country}`}</h1>
                    {/* <h1>{user?.creationDate.toLocaleDateString()}</h1> */}
                  </div>
    );
}

export default UserPage