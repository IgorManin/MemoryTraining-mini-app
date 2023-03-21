import React, { useState } from 'react';
import {
  AdaptivityProvider,
  AppRoot,
  ModalPage,
  ModalRoot,
  SplitCol,
  SplitLayout,
  View,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import GameBlock from './panels/Game';
import MainPanel from './panels/Main';
import Settings from './panels/Settings';
import Records from './panels/Records';
import { LosingModal } from './panels/Game/LosingModal';

const App = ({ store }) => {
  const [activePanel, setActivePanel] = useState('main');

  // const [{ type, ...values }, setModal] = useState({
  //   type: null,
  // });

  const go = (e) => setActivePanel(e.currentTarget.dataset.to);

  // const onClose = () => {
  //   setModal({ type: null });
  //   if (values.onClose) {
  //     values.onClose();
  //   }
  // };

  const modal = (
    <ModalRoot activeModal={store.modal.type} onClose={store.modal.closeModal}>
      <ModalPage id="active">
        <LosingModal
          level={store.game?.level || 1}
          levelDifference={store.modal.values?.levelDifference || 0}
          clickHandler={store.modal.closeModal}
        />
      </ModalPage>
    </ModalRoot>
  );

  return (
    <AdaptivityProvider>
      <AppRoot>
        <SplitLayout modal={modal}>
          <SplitCol>
            <View style={{ background: 'black' }} activePanel={activePanel}>
              <GameBlock store={store} id="game" go={go} />
              <MainPanel id="main" go={go} />
              <Settings id="settings" go={go} />
              <Records id="records" go={go} />
            </View>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
    </AdaptivityProvider>
  );
};
export default App;
