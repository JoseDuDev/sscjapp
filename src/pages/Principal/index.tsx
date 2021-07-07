/* eslint-disable @typescript-eslint/no-unused-vars */
import { useHistory } from 'react-router-dom'

import './styles.scss'
import { useAuth } from '../../hooks/useAuth'
import { useEffect, useState } from 'react';
import { database } from '../../services/firebase';
import api from '../../api';

type Usuario = {
  usuarioId: number;
  nome: string;
  avatar: string;
  email: string;
  telefone: string;
  celular: string;
  nascimento: Date;
  provedor: string;
  uid: string;
  criado: Date;
  alterado: Date;
  perfilId: number;
  ativo: boolean;
}

export function Principal() {
  const history = useHistory();
  const { user } = useAuth();
  const [usuario, setUsuario] = useState<Usuario>();


  if (!user) {
    history.push('/logar');
  }

  useEffect(() => {
    async function getItems() {
      try {
        const { data } = await api.get(`usuario/uid/${user?.id}`);
        if (data.data.length === 1)
          setUsuario(data);
        else {
          const userPost: Usuario = {
            usuarioId: 0,
            nome: user?.name || "Sem nome",
            avatar: user?.avatar || "Sem avatar",
            email: user?.mail || "Sem email",
            telefone: "Sem telefone",
            celular: "Sem celular",
            nascimento: new Date(),
            provedor: user?.provedor || "google",
            uid: user?.id || "1111111111",
            criado: new Date(),
            alterado: new Date(),
            perfilId: 6,
            ativo: true
          };
          api.post(`usuario`, userPost)
            .then(response => setUsuario(response.data))
            .catch(error => {
              console.error('There was an error!', error);
            });
          database.ref(`users/`).push(user)
        }
      } catch (error) {
        alert("Ocorreu um erro ao buscar o usuário");
      }
    }
    getItems();
  }, [user]);

  return (
    <div>
      Conectado como {user?.name} <img className="avatar-img" src={user?.avatar} alt="Avatar" />
    </div>
  )
}