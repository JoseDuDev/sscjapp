import './styles.scss'

import { Menu } from '../../components/header/Menu';
import { LinkMenu } from '../../components/header/LinkMenu';

export function Home() {

  return (
    <header>
      <LinkMenu></LinkMenu>
      <nav className="nav">
        <Menu></Menu>
      </nav>
    </header>
  )
}