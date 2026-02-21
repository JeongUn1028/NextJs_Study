const useState = <S>(init: S): [S, (newState: S) => void] => {
  let state = init;
  const setState = (newState: S): void => {
    state = newState;
  };
  return [state, setState];
};

const [count, setCount] = useState<number>(0);
setCount(1);
console.log(count);
