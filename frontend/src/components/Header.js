
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import {  Image, Menu, Dropdown } from "antd";


function HeaderComponent() {




    const menu = (
        <Menu>
            <Menu.Item key="1" icon={<SettingOutlined />}>
                <Link to="/setting">Setting</Link> {/* Mengarahkan ke halaman Setting.jsx */}
            </Menu.Item>
            <Menu.Item key="2" icon={<LogoutOutlined />}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="HeaderComponent" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Image Linux di sisi kiri */}
            <div className="LogoA">
                <Image
                    src="./linux2.png"
                    alt=""
                />
            </div>

           

            {/* Dropdown untuk menu Setting dan Logout */}
            <Dropdown overlay={menu} placement="bottomRight">
                <a href="#" role="button" className="ant-dropdown-link dropdown-link" onClick={(e) => e.preventDefault()}>
                    <div className="dropdown-container">
                        <div className="LogoB">
                            <Image
                                src="./linux.png"
                                alt=""
                                preview={false} // Menonaktifkan mode preview
                            />
                        </div>
                   
                    </div>
                </a>
            </Dropdown>
        </div>
    );
}

export default HeaderComponent;
