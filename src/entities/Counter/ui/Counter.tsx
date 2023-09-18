import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getCounterValue,
} from '@/entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => dispatch(counterActions.increment());
  const decrement = () => dispatch(counterActions.decrement());

  return (
    <div>
      <h1 data-testid="counter-value-title">{counterValue}</h1>
      <Button data-testid="increment-btn" onClick={increment}>
        +
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        -
      </Button>
    </div>
  );
};
