import React from 'react';
import { useAppSelector } from '../../app/hooks';
import BaseStats from './components/BaseStats';
import Defenses from './components/Defenses';
import Gear from './components/Gear';
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
      <Defenses {...currentCreature.defenses} />
      <BaseStats {...currentCreature.baseStats} />
      <>abilities</>
      <>attacks</>
      <Gear {...currentCreature.gear} />
      <>spellLikeAbilities</>
    </div>
  );
}

export default Display;