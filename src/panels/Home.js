import React from 'react';
import PropTypes from 'prop-types';

import {
  Avatar,
  Button,
  Cell,
  Div,
  Group,
  Header,
  Panel,
  PanelHeader,
} from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => {
  // const [activeBlock, setActiveBlock] = useState('home')
  // const changePanel = (elem) => {
  //     setActiveBlock(elem.currentTarget.dataset.to)
  // }

  return (
    <Panel id={id}>
      <PanelHeader>что-то там</PanelHeader>
      {fetchedUser && (
        <Group
          header={
            <Header mode="secondary">User Data Fetched with VK Bridge</Header>
          }
        >
          <Cell
            before={
              fetchedUser.photo_200 ? (
                <Avatar src={fetchedUser.photo_200} />
              ) : null
            }
            description={
              fetchedUser.city && fetchedUser.city.title
                ? fetchedUser.city.title
                : ''
            }
          >
            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
          </Cell>
        </Group>
      )}

      <Group header={<Header mode="secondary">Navigation Example</Header>}>
        <Div>
          <Button
            stretched
            size="l"
            mode="secondary"
            onClick={go}
            data-to="persik"
          >
            Show me the Persik, please
          </Button>
        </Div>
      </Group>
      {/* <PanelWrapper>*/}
      {/*    <MainButton>Читать Новости</MainButton>*/}
      {/* </PanelWrapper>*/}
      {/* <News/>*/}
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
