import React from 'react';
import PropTypes from 'prop-types';

Summary.propTypes = {
  summary: PropTypes.object,
  url: PropTypes.string,  
};

function Summary(props:any) {
  const {summary, url} = props
  const {name, challengeRating, alignment, init, senses, size, space, subType, type } = summary
  return (
    <div>
      <h1><a href={url} target={'_blank'} rel="noreferrer">{name}</a></h1>
      <div>CR {challengeRating}</div>
      <div>XP XXX</div>
      <div>Alignment {alignment}</div>
      <div>{size}</div> 
      <div>{space}</div>
      <div>{type} {(subType ? <>{subType}</> : <></>)}</div>
      <div>Init {init}</div>
      <div>Senses {senses}</div>
    </div>
  );
}

export default Summary;