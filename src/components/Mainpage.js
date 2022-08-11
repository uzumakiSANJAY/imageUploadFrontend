import { Button } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";
const Mainpage = () => {
  return (
    <>
    <div>ImageUploder</div>
    <Link className="dropdown-item" to="/signup/">
    <Button type="primary" block>
      SignUp
    </Button>
    </Link>
    <Link className="dropdown-item" to="/login/">
    <Button type="primary" block>
      Login
    </Button>
    </Link>
    </>
  )
}

export default Mainpage