import React from 'react';
import Bar from 'components/bar/Bar';
import Contacts from 'components/contacts/Contacts';
import ProfileForm from 'components/form/ProfileForm';
import Geography from 'components/geography/Geography';
import Line from 'components/line/Line';
import Pie from 'components/pie/Pie';

export const ROUTES = [
  {
    path: '/s7/line',
    component: <Line />
  },
  {
    path: '/s7/contacts',
    component: <Contacts />
  },
  {
    path: '/s7/form',
    component: <ProfileForm />
  },
  {
    path: '/s7/bar',
    component: <Bar />
  },
  {
    path: '/s7/pie',
    component: <Pie />
  },
  {
    path: '/s7/geography',
    component: <Geography />
  },
];
