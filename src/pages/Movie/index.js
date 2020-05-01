import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link, useParams } from 'react-router-dom';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';
import { Helmet } from 'react-helmet';

import api from '../../services/Api';

export default function Movie (){
  const { movie } = useParams();
  const [filme, setFilme] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      const response = await api.get(`shows/${movie}`);
      setFilme(response.data)
    }

    fetchData();
  }, [movie])

  return (
    <>
      <Helmet>
        <title>{filme.name}</title>
        <link rel="canonical" href={window.location.href} />
      </Helmet>    
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
