import { Outlet } from "react-router-dom";

import './_style.scss';

export default function AuthLayout() {
  return (
    <div className='background'>
      <Outlet />
    </div>
  )
}