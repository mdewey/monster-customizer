import React from 'react';

interface IGear {
  treasure?: string;
  combat: Array<string>;
  other: Array<string>;
}

const Gear = (props: IGear) => {
  const {
    treasure,
    combat = [],
    other = [],
  } = props;
  return (
    <div>
      <h2>Gear</h2>
      {treasure && <div>Treasure {treasure}</div>}
      {combat.length > 0 &&
        <div>
          <h3>Combat gear</h3>
          {combat.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      }
      {other.length > 0 &&
        <div>
          <h3>Other gear</h3>
          {other.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      }
    </div>
  );
};



export default Gear;