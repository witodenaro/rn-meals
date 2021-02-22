import {useEffect} from 'react';

const componentWillMount = (func) => {
  useEffect(() => {
    func();
  }, [func]);
};

export default componentWillMount;
