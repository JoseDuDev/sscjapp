import { LinkHTMLAttributes } from 'react'

import './styles.scss';

type LinkProps = LinkHTMLAttributes<HTMLLinkElement> & {
  isOutlined?: boolean
};

export function LinkMenu(props: LinkProps) {
  return (
    <button className="room-code">
      <div>

      </div>
      <span>Sala #</span>
    </button>
  )
}