import { useHistory } from 'react-router-dom'

import './styles.scss'
import { useAuth } from '../../hooks/useAuth'

export function Principal() {
  const history = useHistory();
  const { user } = useAuth();
  if (!user) {
    history.push('/logar');
  }

  return (
    <div >
      Conectado
    </div>
  )
}