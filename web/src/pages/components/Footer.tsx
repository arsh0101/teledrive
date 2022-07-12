import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Layout, Row, Space, Typography } from 'antd'
import React from 'react'
import { useThemeSwitcher } from 'react-css-theme-switcher'
import { DiscordIcon } from './Discord'

interface Props {
  me?: any
}

const Footer: React.FC<Props> = () => {
  const { currentTheme } = useThemeSwitcher()
  return <>
    <Layout.Footer style={{ background: '#f0f2f5', paddingTop: '50px' }}>
     
      <Divider />
      <Typography.Paragraph style={{ textAlign: 'center' }}>
        Copyright &copy; {new Date().getFullYear()}
      </Typography.Paragraph>
    </Layout.Footer>
  </>
}

export default Footer
