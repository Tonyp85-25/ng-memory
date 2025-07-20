import { Fruit } from './fruits';

export type CardModel = {
  id: string;
  fruit: Fruit;
  isDisabled: boolean;
  isFound: boolean;
};
