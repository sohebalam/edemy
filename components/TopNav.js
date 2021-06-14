import { Menu } from "antd"
import Link from "next/link"
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons"

const TopNav = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="1" icon={<AppstoreOutlined />}>
        <Link href="/">
          <a>App</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<LoginOutlined />}>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </Menu.Item>

      <Menu.Item key="3" icon={<UserAddOutlined />}>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </Menu.Item>
    </Menu>
  )
}

export default TopNav
