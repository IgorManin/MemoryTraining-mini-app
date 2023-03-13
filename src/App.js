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
  const [{ type, level, levelDifference, clickHandler }, setModal] = useState({
    type: null,
    level: 1,
    levelDifference: 0,
    clickHandler: null,
  });

  const go = (e) => setActivePanel(e.currentTarget.dataset.to);

  const goModals = (id, level, levelDifference, clickHandler) => {
    if (id) {
      setModal({
        type: id,
        level: level,
        levelDifference: levelDifference,
        clickHandler: clickHandler,
      });
    }
  };

  const modal = (
    <ModalRoot activeModal={type} onClose={clickHandler}>
      <ModalPage id="active">
        <LosingModal
          level={level}
          levelDifference={levelDifference}
          clickHandler={clickHandler}
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
