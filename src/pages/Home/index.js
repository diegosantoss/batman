import React, { useState, useEffect } from 'react';
import api from '../../services/Api';

import { Row } from 'reactstrap';

import FilmeItem from '../components/FilmeItem/'

export default function Home (){

  const [filmes, setFilmes] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      const response = await api.get('search/shows?q=batman');
      setFilmes(response.data)
    }

    fetchData();
  }, [])


  return (
    <>
      <h2>Filmes do Batman</h2>
      <Row xs="1" sm="2" md="4">
        {filmes.map(filme => (
          <FilmeItem key={filme.show.id} filme={filme.show} />
        ))}   
      </Row>   
    </>
  )
}