import React, { useState } from 'react';
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitCol,
  SplitLayout,
  View,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import GameBlock from './panels/GameBlock';
import MainPanel from './panels/MainPanel';
import Settings from './panels/Settings';
import Records from './panels/Records';

const App = () => {
  const [activePanel, setActivePanel] = useState('main');

  const go = (e) => setActivePanel(e.currentTarget.dataset.to);

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol>
              <View style={{ background: 'black' }} activePanel={activePanel}>
                <GameBlock id="game" go={go} />
                <MainPanel id="main" go={go} />
                <Settings id="settings" go={go} />
                <Records id="records" go={go} />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
