import { useHistory } from 'react-router-dom';

import { usePeopleStore } from 'pages/People/store';

const usePageHeader = () => {
  const history = useHistory();
  const { people } = usePeopleStore();

  const handleClick = () => {
    history.push('/people/new');
  };

  const selectedPeopleText = people.length
    ? `${people.length} employee${people.length === 1 ? '' : 's'}`
    : '';

  return { selectedPeopleText, handleClick };
};

export default usePageHeader;
