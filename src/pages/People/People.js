import styled from 'styled-components';

import { Card, CardHeader, CardBody } from 'components/Card';

import PageHeader from './components/PageHeader';
import FilterBar from './components/FilterBar';
import PeopleGrid from './components/PeopleGrid';

const Container = styled.main`
  margin: 17px auto 40px;
  width: 100%;
  max-width: var(--layout-width);
`;

export default function People() {
  return (
    <Container>
      <PageHeader />
      <Card>
        <CardHeader small>
          <FilterBar />
        </CardHeader>
        <CardBody>
          <PeopleGrid />
        </CardBody>
      </Card>
    </Container>
  );
}
