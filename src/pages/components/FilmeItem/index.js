import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardBody,
  CardTitle, Button, Col
} from 'reactstrap';

const FilmeItem = (props) => {
  const { filme } = props;
  return (
    <Col>
      <Card>
        <Link to={`/${filme.id}`} >
          <CardImg top width="100%" src={filme.image.medium} alt={filme.name} />
          <CardBody>
            <CardTitle>{filme.name}</CardTitle>
            <Button className="btn-full">Ver Mais</Button>
          </CardBody>
        </Link>
      </Card>
    </Col>
  );
};

export default FilmeItem;