import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from 'components/Button';
import LoadingLogo from 'components/LoadingLogo';
import Text, { TextLight } from 'components/Text';
import { Card, CardHeader, CardBody, CardFooter } from 'components/Card';
import { Table, TableThCell, TableCell, TableRow } from 'components/Table';
import DataGrid from 'components/DataGrid';
import SearchInput from 'components/SearchInput';
import CheckboxGroup from 'components/Checkbox';
import RadioGroup from 'components/RadioButton';
import Alert from 'components/Alert';
import TextField from 'components/Form/TextField';
import SelectField from 'components/Form/SelectField';

import { ReactComponent as IconSearch } from 'theme/icons/search.svg';
import { ReactComponent as IconUser } from 'theme/icons/user.svg';
import { ReactComponent as IconTimesCircle } from 'theme/icons/times-circle.svg';

const Container = styled.main`
  margin: 40px auto;
  width: 100%;
  max-width: var(--layout-width);
`;

const TitleComponent = styled.h2`
  font-size: 1.2rem;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
  margin: 24px 0 0;
  padding-top: 24px;
  border-top: 1px solid var(--colors-mischka);
`;

const Demo = styled.main`
  padding: 16px 0 32px;

  ${(props) =>
    props.gaps &&
    `
    & > * {
      margin-right: 5px;
    }
  `}
`;

export default function Playground() {
  return (
    <Container>
      <Text size="h1" as="h1">
        Playground
      </Text>

      <TextLight as="p">
        These are some of the base components already built for you. You can{' '}
        <Text size="bodyBold">use and modify</Text> them as you need!
      </TextLight>
      <Link to="/">Go Home</Link>

      <TitleComponent>{`<Alert>`}</TitleComponent>
      <Demo>
        <Alert message="The house is on fire!" onClick={() => console.log('clicked')} />
      </Demo>

      <TitleComponent>{`<RadioButton>`}</TitleComponent>
      <Demo>
        <RadioGroup
          options={[
            { label: 'First', description: 'The first description', value: 'first' },
            { label: 'Second', description: 'The second description', value: 'second' },
            { label: 'Third', description: 'The third description', value: 'third' },
          ]}
          selectedValue="second"
          gap={10}
          onChange={(selectedValues) => console.log(selectedValues)}
        />
      </Demo>

      <TitleComponent>{`<CheckboxGroup>`}</TitleComponent>
      <Demo>
        <CheckboxGroup
          options={[
            { label: 'First', value: 'first' },
            { label: 'Second', value: 'second' },
            { label: 'Third', value: 'third' },
          ]}
          selectedValues={['second']}
          gap={10}
          onChange={(selectedValues) => console.log(selectedValues)}
        />
      </Demo>

      <TitleComponent>{`<SearchInput>`}</TitleComponent>
      <Demo>
        <SearchInput placeholder="Search employees..." />
      </Demo>

      <TitleComponent>{`<Text>`}</TitleComponent>
      <Demo>
        <Text as="p" size="body">
          Everyday is a <Text size="bodyBold">new opportunity</Text> to grow.
        </Text>
      </Demo>

      <TitleComponent>{`<Button>`}</TitleComponent>
      <Demo gaps>
        <Button>Default</Button>
        <Button outline>Outline</Button>
        <Button progress>Default</Button>
        <Button outline progress>
          Outline
        </Button>
      </Demo>

      <TitleComponent>{`<Card>`}</TitleComponent>
      <Demo>
        <Card>
          <CardHeader>Start with the CardHeader</CardHeader>
          <CardBody>This is the CardBody</CardBody>
          <CardFooter>And this is the CardFooter</CardFooter>
        </Card>
      </Demo>

      <TitleComponent>{`<Table>`}</TitleComponent>
      <Demo>
        <Card>
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
      </Demo>

      <TitleComponent>{`<DataGrid>`}</TitleComponent>
      <Demo>
        <Card>
          <CardBody>
            <DataGrid
              columns={[
                { title: 'Name', key: 'name', minWidth: '200px' },
                { title: 'Role', key: 'role' },
                { title: 'Type', key: 'type' },
                { title: 'Country', key: 'country' },
                { title: 'Salary', key: 'salary', align: 'right' },
                { title: '', key: 'action', cellRenderer: (row, column) => {
                  return (
                    <a href="http://www.index.hu">Hello world</a>
                  )
                }},
              ]}
              dataProvider={[
                { name: 'John Smith', role: 'Product manager', type: 'Employee', country: 'Portugal', salary: '35,000' },
                { name: 'Paul Clark', role: 'Software engineer', type: 'Contractor', country: 'United States', salary: '100,000' },
              ]}
            />
          </CardBody>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <CardBody>
            <DataGrid
              columns={[
                { title: 'Employee Name', key: 'name' },
                { title: 'Age', key: 'age' },
                { title: 'E-mail', key: 'email' },
                { title: 'Salary', key: 'salary', align: 'right' },
              ]}
              dataProvider={[]}
              loading={false}
            />
          </CardBody>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <CardBody>
            <DataGrid
              columns={[
                { title: 'Employee Name', key: 'name' },
                { title: 'Age', key: 'age' },
                { title: 'E-mail', key: 'email' },
                { title: 'Salary', key: 'salary', align: 'right' },
              ]}
              dataProvider={[]}
              loading={true}
            />
          </CardBody>
        </Card>
      </Demo>

      <TitleComponent>{`<TextField>`}</TitleComponent>
      <Demo>
        <TextField label="Name" placeholder="e.g. Kim Fog" helper="First and last name" />

        <TextField
          label="E-mail"
          type="email"
          defaultValue="fakemail"
          placeholder="e.g. job@email.com"
          helper="Your personal e-mail"
          errorMsg="It does not sound like an e-mail"
        />
      </Demo>

      <TitleComponent>{`<SelectField>`}</TitleComponent>
      <Demo>
        <SelectField label="Food" defaultValue="" helper="Your favorite food">
          <option value="" hidden>
            Select food...
          </option>
          <option>Chinese</option>
          <option>Italian</option>
          <option>Mexican</option>
          <option>Other</option>
        </SelectField>
      </Demo>

      <TitleComponent>{`<LoadingLogo>`}</TitleComponent>
      <Demo>
        <LoadingLogo />
      </Demo>

      <TitleComponent>Icons</TitleComponent>
      <Demo>
        <IconSearch />
        <IconUser />
        <IconTimesCircle />
      </Demo>
    </Container>
  );
}
