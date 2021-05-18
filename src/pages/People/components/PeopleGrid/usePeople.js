import { useEffect } from 'react';

import { usePeopleStore, usePeopleDispatch, peopleActions } from 'pages/People/store';

const usePeople = () => {
  const store = usePeopleStore();
  const dispatch = usePeopleDispatch();

  useEffect(() => {
    !store.people.length && peopleActions.fetchPeople(dispatch);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return { people: store.people, loading: store.loading };
}

export default usePeople;
