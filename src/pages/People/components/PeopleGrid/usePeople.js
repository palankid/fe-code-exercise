import { useEffect } from 'react';

import { usePeopleStore, usePeopleDispatch, peopleActions } from 'pages/People/store';

const usePeople = () => {
  const { people, loading, error } = usePeopleStore();
  const dispatch = usePeopleDispatch();

  useEffect(() => {
    peopleActions.fetchPeople(dispatch);
  }, [dispatch]);

  return { people, loading, error };
};

export default usePeople;
