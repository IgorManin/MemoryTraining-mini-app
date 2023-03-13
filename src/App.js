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

const App = () => {
  const [recordGame, setRecordGame] = useState(0);
  const [activePanel, setActivePanel] = useState('main');
  const [{ type, ...props }, setModal] = useState({
    type: null,
  });

  const go = (e) => setActivePanel(e.currentTarget.dataset.to);

  const goModals = (id, props) =>
    setModal({
      type: id,
      ...props,
    });

  const onClose = () => {
    setModal({ type: null });
    if (props.onClose) {
      props.onClose();
    }
  };

  const modal = (
    <ModalRoot activeModal={type} onClose={onClose}>
      <ModalPage id="active">
        <LosingModal
          level={props?.level || 1}
          levelDifference={props?.levelDifference || 0}
          clickHandler={onClose}
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
              <GameBlock
                id="game"
                go={go}
                goModals={goModals}
                type={type}
                setRecordGame={setRecordGame}
                recordGame={recordGame}
              />
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
