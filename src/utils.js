import { useState } from 'react';

export const createList = (data, dataName, Component) => {
  return data.map((item) => {
    let props = {};

    props[dataName] = item;

    return (
      <li key={item}>
        <Component {...props} />
      </li>
    );
  });
};

export const useGetInput = (e) => {
  const [string, setString] = useState('');

  const getInput = (e, char) => {
    if (char === undefined) {
      return;
    }
    if (char === '=' && Number(string.slice(-1)[0])) {
      // console.log(Number(string.slice(-1)[0]));
      if (
        string.slice(0, 1)[0] === '-' ||
        typeof +string.slice(0, 1)[0] === 'number'
      ) {
        setString((string) => {
          // eslint-disable-next-line no-eval
          const total = eval(string);
          return `${total}`;
        });
      }
    }

    if (char === '√' && typeof Number(string) === 'number') {
      let sqrtResult = Math.sqrt(Number(string));
      setString(sqrtResult);
    } else if (char === 'CLEAR') {
      setString('');
    } else {
      if (char !== '=') {
        setString((string) => {
          return string.concat(char);
        });
      }
    }
  };

  return [string, getInput];
};
