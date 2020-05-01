import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';

import api from '../../services/Api';

export default function Movie (props){
  const id = props.location.state;
  const [filme, setFilme] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      const response = await api.get(`shows/${id}`);

      setFilme(response.data)
    }

    fetchData();
  }, [id])

  return (
    <>
    <Row xs="1" sm="2" md="2">
      <Col>
        <RenderImage images={filme.image} name={filme.name}/>
      </Col>
      <Col>
        <Card>
          <CardBody>
            <CardTitle>{filme.name}</CardTitle>
            <CardSubtitle><RenderGenres genres={filme.genres} /></CardSubtitle>
            <div className="card-text"> { ReactHtmlParser(filme.summary) }</div>
            <Link to="/"><Button className="btn-full">Voltar</Button></Link>
          </CardBody>
        </Card>
      </Col>
    </Row>
    </>
  )
}

function RenderImage(props){
  if(props.images){
    return <CardImg top width="100%" src={props.images.original} alt={props.name} />;
  }

  return false;
}

function RenderGenres(props){
  if(props.genres){
    return props.genres.map( (genre, index) => (
      <p key={index}>{genre}</p>
    ))
  }

  return false;
}
