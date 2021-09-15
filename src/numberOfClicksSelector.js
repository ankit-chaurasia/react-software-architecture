import { selector } from 'recoil';
import { counterState } from './counterState';

export const numberOfClicksSelector = selector({
  key: 'numberOfClicksSelector',
  get: ({ get }) => {
    const clicksData = get(counterState);
    const totalClick = clicksData.reduce((sum, click) => sum + click.amount, 0);
    return totalClick;
  },
});
