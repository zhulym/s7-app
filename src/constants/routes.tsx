import React from 'react';
import Bar from 'components/bar/Bar';
import Contacts from 'components/contacts/Contacts';
import ProfileForm from 'components/form/ProfileForm';
import Geography from 'components/geography/Geography';
import Line from 'components/line/Line';
import Pie from 'components/pie/Pie';

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
