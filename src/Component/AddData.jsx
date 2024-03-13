import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem,updateItem } from '../redux/Reducer';

function AddData() {
  const userinfo = useSelector((state) => state.user.userInfo || []);
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [inputValue, setInputValue] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(inputValue));
    setInputValue({
      name: '',
      age: '',
      email: '',
      password: '',
    });
  };
  const deleteData = (id) => {
    dispatch(deleteItem(id));
  } 
  const editData = (id) => {
    const selectedData = userinfo[id];
    if (selectedData) {
      setId(id);
      setInputValue({
        name: selectedData.name || '',
        age: selectedData.age || '',
        email: selectedData.email || '',
        password: selectedData.password || '',
      })

    }
  }
  const updateData = (e) => {
      e.preventDefault();
      const updateValue = {
          id:id,
          name:inputValue.name,
          age:inputValue.age,
          email:inputValue.email,
          password:inputValue.password,
      };
      dispatch(updateItem(updateValue));
      setInputValue({
         name:'',
         age:'',
         email:'',
         password:'',
      })
      setId('');
  }
  return (
    <div>
      <div className='frm1'>
        <div className='frm'>
          <form onSubmit={id !== '' ? updateData :  handleSubmit} className='f1'>
            <label>Name:-</label>
            <input  className="t1" type="text" name="name" value={inputValue.name} onChange={handleChange} required placeholder='Enter Your Name' />
            <br /><br />

            <label>Age:-</label>
            <input type="text" className='t2' name="age" value={inputValue.age} onChange={handleChange} required placeholder='Enter Your Age' />
            <br /><br />

            <label>Email:-</label>
            <input type="email" className='t3' name="email" value={inputValue.email} onChange={handleChange} required placeholder='Enter Your Email' />
            <br /><br />

            <label>Pwd:-</label>
            <input type="password" className='t4' name="password" value={inputValue.password} onChange={handleChange} required placeholder='Enter Your Password' />
            <br /><br />
            <button  class="btn btn-outline-warning fw-bold text-primary" type="submit">SaveData</button>
          </form>
        </div>
      </div>
      <br /><br />
      <table border={1} className='table table-striped'>
        <thead className='fw-bold'>
          <tr textalign="center">
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Password</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            userinfo.map((i, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.email}</td>
                  <td>{i.password}</td>
                  <td><button type='button' className='btn btn-outline-success' onClick={()=> editData(index)}>Edit</button>&nbsp;<button class="btn btn-outline-danger" type='button' onClick={() => deleteData(index)}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AddData;