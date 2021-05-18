import { useEffect } from 'react';

import { usePeopleStore, usePeopleDispatch, peopleActions } from 'pages/People/store';

const usePeople = () => {
  const { people, loading, error } = usePeopleStore();
  const dispatch = usePeopleDispatch();

  useEffect(() => {
    !people.length && peopleActions.fetchPeople(dispatch);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return { people, loading, error };
};

export default usePeople;
