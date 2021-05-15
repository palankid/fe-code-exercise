import styled from 'styled-components';

import { Card, CardHeader, CardBody } from 'components/Card';
import { Table, TableThCell, TableCell, TableRow } from 'components/Table';

const Container = styled.main`
  margin: 40px auto;
  width: 100%;
  max-width: var(--layout-width);
`;

export default function People() {
  return (
    <Container>
      <h1>People</h1>

      <Card>
        <CardHeader small>
          
        </CardHeader>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <TableThCell>Employee Name</TableThCell>
                <TableThCell>Country</TableThCell>
                <TableThCell align="right">Salary</TableThCell>
              </tr>
            </thead>
            <tbody>
              <TableRow>
                <TableCell>Ana Morgado</TableCell>
                <TableCell>Portugal</TableCell>
                <TableCell align="right">EUR 5.000,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Kate Will</TableCell>
                <TableCell>United States</TableCell>
                <TableCell align="right">USD 10,000,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pierre Clark</TableCell>
                <TableCell>France</TableCell>
                <TableCell align="right">EUR 3.000,00</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Container>
  );
}
