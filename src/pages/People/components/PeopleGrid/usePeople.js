import { useEffect } from 'react';

import { usePeopleStore, usePeopleDispatch, peopleActions } from 'pages/People/store';

const usePeople = () => {
  const { people, loading, error } = usePeopleStore();
  const dispatch = usePeopleDispatch();

  useEffect(() => {
    !people.length && !loading && peopleActions.fetchPeople(dispatch);
  }, [people, loading, dispatch]);

  return { people, loading, error };
};

export default usePeople;
