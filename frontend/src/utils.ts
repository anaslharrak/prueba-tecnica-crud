import { toast } from "sonner";
import mongoose from "mongoose";
import { API_URL } from "./constants"
import { User } from "./types";

const deleteUser = (id: mongoose.Types.ObjectId) => {      
  fetch(`http://${API_URL}/api/user/${id}`, {
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
  toast.warning(`User ${user.name} ${user.surname} will be deleted, are you sure?`, 
    {
      action: {
        label: 'Delete',
        onClick: () => deleteUser(user._id)
      },
    }
  );
}
