import { toast } from "sonner";
import mongoose from "mongoose";
import { API_URL } from "./constants"
import { User } from "./types";

export const fetchUsersAndReload = async () => {
  try {
      const response = await fetch(`http://${API_URL}/api/users`);
      const data = await response.json();
      return data.users;
  } catch (error) {
      toast.error('Failed to fetch users: ' + error);
      return [];
  }
}

const deleteUser = (id: mongoose.Types.ObjectId) => {
  return fetch(`http://${API_URL}/api/user/${id}`, {
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

export const HandleDelete = (user: User) => {
  return new Promise<void>((resolve, reject) => {
    toast.warning(`User ${user.name} ${user.surname} will be deleted, are you sure?`, 
      {
        action: {
          label: 'Delete',
          onClick: async () => {
            try {
              await deleteUser(user._id);
              resolve();  
            } catch (error) {
              reject(error);  
            }
          }
        },
      }
    );
  });
}
