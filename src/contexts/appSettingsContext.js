import { createContext, useState } from 'react';

export const AppSettingsContext = createContext();

const AppSettingsProvider = ({ children }) => {
  const [state, setState] = useState({ view: true, archiveView: false })

  const switchView = () => {
    setState({ ...state, view: !state.view });
  };

  const switchArchiveView = () => {
    setState({ ...state, archiveView: !state.archiveView });
  };

  return (
    <AppSettingsContext.Provider
      value={{
        state: state,
        switchView: switchView,
        switchArchiveView: switchArchiveView,
      }}
    >
      {children}
    </AppSettingsContext.Provider>
  );
}

export default AppSettingsProvider
