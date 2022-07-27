import React, {useState} from 'react';
import PropTypes from 'prop-types'
import Link from 'next/link'
import {Input, Menu, Row, Col} from 'antd'
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';


const AppLayout = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <Menu mode='horizontal'>
        <Menu.Item><Link href='/'><a>노드버드</a></Link></Menu.Item>
        <Menu.Item><Link href='/profile'><a>프로필</a></Link></Menu.Item>
        <Menu.Item><Input.Search enterButton></Input.Search></Menu.Item>
        <Menu.Item><Link href='/signup'><a>회원가입</a></Link></Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile/> : <LoginForm/>}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href='' target='_blank' rel='noreferrer noopener'>Made by Minju</a>
        </Col>
      </Row>
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppLayout