import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router'

import './styles.scss'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'

import googleLogoImg from '../../assets/images/google-logo.svg'

import { Button } from '../../components/Button'

export function Deslogado() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleConnectGoogle() {
    if (!user) {
      await signInWithGoogle()
    }

    //history.push('/sala/nova');
  }

  return (
    <>
      <div>Deslogado</div>
      <div className="container-google-btn">
        <div className="google-btn" onClick={handleConnectGoogle}>
          <div className="google-icon-wrapper">
            <img className="google-icon" src={googleLogoImg} alt="Logo Google" />
          </div>
          <p className="btn-text"><b>Entrar com Google</b></p>
        </div>
      </div>
    </>
  )
}