import React from 'react';
import { useAppSelector } from '../../app/hooks';
import Movement from './components/Movement';
import Summary from './components/Summary';



function Display() {
  const currentCreature = useAppSelector(state => state?.data?.currentCreature);
  console.log({ currentCreature });
  if (!currentCreature) {
    return <></>;
  }
  return (
    <div>
      <Summary summary={currentCreature.summary} url={currentCreature.fullLink} />
      <Movement movements={currentCreature.movements} />
      <>defenses</>
      <>base stats</>
      <>abilities</>
      <>attacks</>
      <>gear</>
      <>spellLikeAbilities</>
    </div>
  );
}

export default Display;