// @flow
import * as React from 'react';
import './favorites.css';

const BASE_IMAGE_PATH = '../../../public/images/tech';

type Favorite = {
  title: string,
  imageSrc: string,
};

const data: Favorite[] = [
  {
    title: 'Kubernetes',
    imageSrc: `${BASE_IMAGE_PATH}/kubernetes.png`,
  },
  {
    title: 'Golang',
    imageSrc: `${BASE_IMAGE_PATH}/golang.png`,
  },
  {
    title: 'ReactJS',
    imageSrc: `${BASE_IMAGE_PATH}/react.png`,
  },
  {
    title: 'Docker',
    imageSrc: `${BASE_IMAGE_PATH}/docker.png`,
  },
  {
    title: 'Node',
    imageSrc: `${BASE_IMAGE_PATH}/node.png`,
  },
  {
    title: 'Google Cloud',
    imageSrc: `${BASE_IMAGE_PATH}/gcp.png`,
  },
  {
    title: 'MongoDB',
    imageSrc: `${BASE_IMAGE_PATH}/mongo.png`,
  },
  {
    title: 'PostgresSQL',
    imageSrc: `${BASE_IMAGE_PATH}/postgres.png`,
  },
  {
    title: 'Redis',
    imageSrc: `${BASE_IMAGE_PATH}/redis.png`,
  },
  {
    title: 'Webpack',
    imageSrc: `${BASE_IMAGE_PATH}/webpack.png`,
  },
  {
    title: 'GraphQL',
    imageSrc: `${BASE_IMAGE_PATH}/graphql.png`,
  },
  {
    title: 'Relay',
    imageSrc: `${BASE_IMAGE_PATH}/relay.png`,
  },
];

export default function Favorites() {
  const renderItem = (item: Favorite) => {
    return (
      <div className="col-md-2" key={item.title}>
        <img className="img-responsive" src={item.imageSrc} alt={item.title} />
        <p className="label">{item.title}</p>
      </div>
    );
  };

  return (
    <section id="favorites">
      <div className="container">
        <h2>Favorites</h2>
        <div className="row justify-content-center">
          {data.map(item => {
            return renderItem(item);
          })}
        </div>
      </div>
    </section>
  );
}
