import { useContext, useState } from 'react';
// import { CounterContext } from './CounterContext';
// import { useRecoilState, useRecoilValue } from 'recoil';
// import { counterState } from './counterState';
// import { incrementByState } from './incrementByState';
// import { numberOfClicksSelector } from './numberOfClicksSelector';
// import { useSelector, useDispatch } from 'react-redux';
// import { getNumberOfClicks } from './selectors';
// import { counterButtonClicked } from './actions';
import { observer } from 'mobx-react-lite';

const CounterButton = observer(({ counter }) => {
  // const { numberOfClicks, increment } = useContext(CounterContext);
  const [incrementBy, setIncrementBy] = useState(1);
  // const [ numberOfClicks, setNumberOfClicks ] = useRecoilState(counterState);
  // const [clicksData, setClicksData] = useRecoilState(counterState);
  // const numberOfClicks = useRecoilValue(numberOfClicksSelector);
  // const [clicksData, setClicksData] = useRecoilState(counterState)
  // const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

  // const numberOfClicks = useSelector(getNumberOfClicks);
  // const dispatch = useDispatch();

  return (
    <div>
      {/* <p>You have clicked the button {numberOfClicks} times.</p> */}
      <p>You have clicked the button {counter.numberOfClicks} times.</p>
      <label>
        Increment By:
        <input
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
          type="number"
        />
      </label>
      {/* <button onClick={() => setNumberOfClicks(numberOfClicks + incrementBy)}>Click</button> */}
      {/* <button
        onClick={() =>
          setClicksData([
            ...clicksData,
            {
              timeStamp: Date.now(),
              amount: incrementBy,
            },
          ])
        }
      >
        Click
      </button> */}
      {/* <button onClick={() => dispatch(counterButtonClicked(incrementBy))}>
        Click
      </button> */}
      <button onClick={() => counter.increment(incrementBy)}>Click</button>
    </div>
  );
});

export default CounterButton;
