import React from 'react';

interface IBaseStats {
  strength: number;
  strMod: number;
  dexterity: number;
  dexMod: number;
  constitution: number;
  conMod: number;
  intelligence: number;
  intMod: number;
  wisdom: number;
  wisMod: number;
  charisma: number;
  chaMod: number;
  baseAttackBonus: number;
  cmb: string;
  cmd: string;
}


const BaseStats = (props: IBaseStats) => {
  const {
    strength,
    strMod,
    dexterity,
    dexMod,
    constitution,
    conMod,
    intelligence,
    intMod,
    wisdom,
    wisMod,
    charisma,
    chaMod,
    baseAttackBonus,
    cmb,
    cmd,
  } = props;
  return (
    <div>
      <h2>Base Stats</h2>
      <div>Strength {strength}</div>
      <div>Strength modifier {strMod}</div>
      <div>Dexterity {dexterity}</div>
      <div>Dexterity modifier {dexMod}</div>
      <div>Constitution {constitution}</div>
      <div>Constitution modifier {conMod}</div>
      <div>Intelligence {intelligence}</div>
      <div>Intelligence modifier {intMod}</div>
      <div>Wisdom {wisdom}</div>
      <div>Wisdom modifier {wisMod}</div>
      <div>Charisma {charisma}</div>
      <div>Charisma modifier {chaMod}</div>
      <div>Base attack bonus {baseAttackBonus}</div>
      <div>CMB {cmb}</div>
      <div>CMD {cmd}</div>
    </div>
  );
};




export default BaseStats;