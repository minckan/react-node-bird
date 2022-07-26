import React from 'react';
import PropTypes from 'proptypes'
import Link from 'next/link'
import {Menu} from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem';

const AppLayout = ({children}) => {
  return (
    <Menu mode='horizontal'>
      <MenuItem><Link href='/'><a>노드버드</a></Link></MenuItem>
      <MenuItem><Link href='/profile'><a>프로필</a></Link></MenuItem>
      <MenuItem><Link href='/signup'><a>회원가입</a></Link></MenuItem>
      {children}
    </Menu>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppLayout