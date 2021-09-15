import { useRecoilValue } from 'recoil';
import { counterState } from './counterState';

export const DisplayCount = () => {
  const clicksData = useRecoilValue(counterState);

  return <h2>Number of Clicks: {clicksData.length}</h2>;
};
