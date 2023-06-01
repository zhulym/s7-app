import React from 'react';
import Bar from 'pages/Bar';
import Contacts from 'components/contacts/Contacts';
import ProfileForm from 'components/form/ProfileForm';
import Geography from 'pages/Geography';
import Line from 'pages/Line';
import Pie from 'pages/Pie';

export const ROUTES = [
  {
    path: '/s7-app',
    component: <Line />
  },
  {
    path: '/s7-app/contacts',
    component: <Contacts />
  },
  {
    path: '/s7-app/form',
    component: <ProfileForm />
  },
  {
    path: '/s7-app/bar',
    component: <Bar />
  },
  {
    path: '/s7-app/pie',
    component: <Pie />
  },
  {
    path: '/s7-app/geography',
    component: <Geography />
  },
];
