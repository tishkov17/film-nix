import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from '../../pages/RegistrationPage';
import HomePage from '../../pages/HomePage';
import store, { persistor } from '../../store';
import { HOME_PAGE, REGISTRATION } from '../../constants/routes';
import './styles.scss';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div id="wrapper">
            <Routes>
              <Route exact path={HOME_PAGE} element={<HomePage />} />
              <Route exact path={REGISTRATION} element={<RegistrationPage />} />
            </Routes>
          </div>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;