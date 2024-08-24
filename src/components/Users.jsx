import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users)
    const loading = useSelector((state) => state.users.loading)
    const error = useSelector((state) => state.users.error);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])
  return (
    <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}: {user.email}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users