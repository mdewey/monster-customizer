import React from 'react';


interface IMovementProps {
  movements: Array<string>;
}
const Movement = ({ movements = [] }: IMovementProps) => {

  return (
    <div>
      <h2>Movement</h2>
      {movements.map(spd => {
        return <div>{spd}</div>
      })}
    </div>
  );
};

export default Movement;