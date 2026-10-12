import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Dashboard from './page/dashboard/Dashboard.tsx';
import Team from './page/team/Team.tsx';
import Contacts from './page/contacts/Contacts.tsx';
import Invoices from './page/invoices/Invoices.tsx';
import Form from './page/form/Form.tsx';
import Calendar from './page/calendar/Calendar.tsx';
import Faq from './page/faq/Faq.tsx';
import BieChart from './page/pieChart/BieChart.tsx';
import LineChart from './page/lineChart/LineChart.tsx';
import Geography from './page/geography/Geography.tsx';
import BarChart from './page/barChart/BarChart.tsx';
import NotFound from './page/notfound/Notfound.tsx';


//  تعريف المسارات
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Dashboard />},
      {path: 'team', element: <Team />},
      {path: 'contacts', element: <Contacts />},
      {path: 'invoices', element: <Invoices />},
      {path: 'form', element: <Form />},
      {path: 'calendar', element: <Calendar />},
      {path: 'faq', element: <Faq />},
      {path: 'barChart', element: <BarChart />},
      {path: 'pieChart', element: <BieChart />},
      {path: 'lineChart', element: <LineChart />},
      {path: 'geography', element: <Geography />},
      {path: '*', element: <NotFound />},
    ],
  },
]);

// 2. تشغيل التطبيق
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
); 


