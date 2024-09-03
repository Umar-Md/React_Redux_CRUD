import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {updateUser} from './UserReducer';
function Update() {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f=>f.id == id);

    const {name,email}=existingUser[0];
    const [Newname, setName] = useState(name);
    const [Newemail, setEmail] = useState(email);
    const dispatch=useDispatch();
    const navigate =useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id:id,
            name: Newname,
            email: Newemail }));
            navigate('/');
        }
        
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div className="w-50 border bg-secondary text-white p-5">
      <h3>Update User</h3>

      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={Newname} onChange={(e) => setName(e.target.value)}
    />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={Newemail} onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-success">Update</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Update