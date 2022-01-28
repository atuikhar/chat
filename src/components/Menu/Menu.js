import { Link } from 'react-router-dom'
import { LeftMenu, MenuContainer, MenuLogo, LogOut } from './MenuStyles'

const Menu = () => {
  return (
    <>
      <LeftMenu>
        <MenuContainer>
          <MenuLogo src="/Menu.png" />
        </MenuContainer>
        <MenuContainer>
          <Link to="/about">
            <MenuLogo src="/Home.png" />
          </Link>
        </MenuContainer>
        <MenuContainer>
          <MenuLogo src="/Chat.png" />
        </MenuContainer>
        <MenuContainer>
          <MenuLogo src="/Setting.png" />
        </MenuContainer>
        <LogOut>
          <MenuContainer>
            <MenuLogo src="/LogOut.png" />
          </MenuContainer>
        </LogOut>
      </LeftMenu>
    </>
  )
}

export default Menu
