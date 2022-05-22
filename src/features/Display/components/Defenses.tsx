import React from 'react';

interface IDefensesProps {
  ac: number;
  touchAC: number;
  flatFootedAC: number;
  acFormula: string;
  hp: number;
  hpFormula: string;
  fort: number;
  reflex: number;
  will: number;
  damageReduction?: number;
  immune?: string;
  spellResistance: number;
  resits?: string;
  regeneration?: string;
}
const Defenses = (props: IDefensesProps) => {
  const {
    ac,
    touchAC,
    flatFootedAC,
    acFormula,
    hp,
    hpFormula,
    fort,
    reflex,
    will,
    damageReduction,
    immune,
    spellResistance,
    resits,
    regeneration,
  } = props;

  console.log({ spellResistance })

  return (
    <div>
      <h2>Defenses</h2>
      <div>AC {ac}</div>
      <div>Touch AC {touchAC}</div>
      <div>Flat-footed AC {flatFootedAC}</div>
      <div>AC formula {acFormula}</div>
      <div>HP {hp}</div>
      <div>HP formula {hpFormula}</div>
      <div>Fort {fort}</div>
      <div>Reflex {reflex}</div>
      <div>Will {will}</div>
      <div>Spell resistance {spellResistance}</div>
      {damageReduction && <div>Damage reduction {damageReduction}</div>}
      {immune && <div>Immune {immune}</div>}
      {resits && <div>Resists {resits}</div>}
      {regeneration && <div>Regeneration {regeneration}</div>}
    </div>
  );
};

export default Defenses;