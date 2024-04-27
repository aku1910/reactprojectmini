import React, { useEffect, useState } from 'react'
import { MdOutlinePerson } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import axios from 'axios';
import { CiFilter } from "react-icons/ci";



const Blogsection1 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('http://localhost:3000/users');
              setUsers(response.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

  return (
      <div >
        <div className='flex justify-around items-center flex-wrap'>
          <div>
              <h1 className='text-[30px] font-bold'>🚀 Bloq yazıları</h1>
              <p className='text-gray-500 text-[19px]'>İstənilən mövzuda yazıçıların hekayələrini, düşüncələrini və <br /> təcrübələrini kəşf edin.</p>
          </div>
          <div className='flex gap-[10px] flex-wrap'>
            <input className='border p-[10px] border-gray-300 text-gray-500 w-[230px] h-[50px]' type="text" name="" value={"Axtarış"} id="" />
            <button className='blogbutton'>Filtr< CiFilter /></button>
          </div>
         </div>
          <div className='users'>
              {users.map((user) => (
                  <div key={user.id} className='userinfo'>
                      <img className='image' src={user.image} alt={user.name} />
                      <h1 className='name'>{user.name}</h1>
                      <p className='info'>{user.info}</p>
                      <div className='supporter'>
                          <MdOutlinePerson />
                          <span>{user.supporter}</span>
                      </div>
                      <div className='location'>
                          <BsGlobe />
                          <span>{user.location}</span>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};


export default Blogsection1