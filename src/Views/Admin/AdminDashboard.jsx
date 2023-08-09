import React, { useEffect } from 'react';
import TabListGeneral from './TabList/TabListGeneral';
import {
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import { useDispatch } from 'react-redux';
import { getAllPayments, getUsers } from '../../redux/actions/actions';
import logo from '../../sources/logoCompleto.png'
import styles from './AdminDashboar.module.css'
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllPayments());
    dispatch(getUsers());
 
  }, [dispatch]);

  return (
 <>
        
    <Card className="mt-1 h-screen w-screen">
    <img onClick={()=> navigate('/') } className={styles.logoCompleto} src={logo} alt="" />
      <TabGroup>
        <TabList className="mt-10">
          <Tab>General</Tab>
          <Tab>Libros</Tab>
          <Tab>Usuarios</Tab>
          <Tab>Pagos</Tab>
        </TabList>
        <TabPanels>
          <TabListGeneral />
          <TabPanel>
            <div className="mt-8">
              <button className='p-2 bg-orange-400 cursor-pointer rounded-md' onClick={()=> {navigate('/admin/createBook')}} >Upload new book</button>
              <h1>libros</h1>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-8">
              <h1>usuarios</h1>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-8">
              <h1>usuarios</h1>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
    </>
  )
}

export default AdminDashboard