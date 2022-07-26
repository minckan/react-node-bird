import React, {useState, useCallback} from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';

const LoginForm = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const onChangeId = useCallback((e) => {
    setId(e.target.value)
  }, [])
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])
  return (
    <Form>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <Input name='user-id' value={id} onChange={onChangeId} required></Input>
      </div>
      <div>
        <label htmlFor='user-password'>패스워드</label>
        <Input name='user-password' type={password} value={password} onChange={onChangePassword} required></Input>
      </div>
      <div>
        <Button type='primary' htmlType='submit' loading={false}>로그인</Button>
        <Link href='/signup'><a><Button>회원가입</Button></a></Link>
      </div>
    </Form>
  )
}

export default LoginForm