import { Resource, ResourceCost, CardEffect } from './card';

export type WonderId =
  | 'colossus'
  | 'lighthouse'
  | 'temple'
  | 'babylon'
  | 'olympia'
  | 'halicarnassus'
  | 'giza';

export interface WonderStage {
  cost: ResourceCost;
  effects: CardEffect[];
}

export interface WonderBoard {
  id: WonderId;
  name: string;
  startingResource: Resource;
  stages: WonderStage[]; // side A only (MVP)
}
