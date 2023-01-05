import React, { useEffect, useState} from 'react';
import '../component/navbar.css'

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async ()=>{

    const data2= await fetch('http://localhost:4000/api/v1/cycle');
    const data1 = await data2.json();
    setUsers(data1['data']['result'])
    console.log(data1['data']['result'])
    // console.log(data1['data'])

  }
  useEffect(()=>{
    getUsers();
  }, []);
  return (
    <h1>
      {

            <div className='div1'>
              <table id="customers">
              <tr>
                <th>Name</th>
                <th>age</th>
                <th>Country</th>
                <th>height</th>
                <th>weight</th>
                <th>Gender</th>
              </tr>
              {

        users.map((ele) =>{
          return (
              <tr>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>{ele.country}</td>
                <td>{ele.height}</td>
                <td>{ele.age}</td>
                <td>{ele.Gender ==="1"? "male":"Female"}</td>
              </tr>
              
              )
              
            })
              }
            </table>
            </div>
      }
    </h1>

  )
}


export default AllUsers;