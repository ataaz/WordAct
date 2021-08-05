import React from 'react';
import { Helmet } from 'react-helmet';

export default function MetaComponent(props) {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description}></meta>
      </Helmet>
    </div>
  )
}