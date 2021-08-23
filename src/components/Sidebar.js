import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import * as GrIcons from 'react-icons/gr';


export const Sidebar = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },

  {
      title: 'Products',
      path: '/products',
      icon: <FaIcons.FaCartPlus />,
      cName: 'nav-text'
    },
    
    {
      title: 'Delete',
      path: '/delete',
      icon: <AiIcons.AiFillDelete />,
      cName: 'nav-text'
    },

  {
    title: 'Update',
    path: '/Update',
    icon: <GrIcons.GrUpdate />,
    cName: 'nav-text'
  }
];
