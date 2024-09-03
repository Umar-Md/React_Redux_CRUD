import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link,useNavigate} from 'react-router-dom';
import { deleteUser } from './UserReducer';


function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
const handleDelete = (id) => {
  dispatch(deleteUser({id:id}));

}
  return (
    <div className='container'>
      <Link to='/Create' className='btn btn-success my-3'>Create</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary' >Edit</Link>
                  <button  onClick={() => handleDelete(user.id)}className='btn btn-sm btn-danger ms-2' >Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
