import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/songReducer.ts'; // Correct path to rootReducer
import rootSaga from './sagas/songSagas.ts'; // Correct path to rootSaga

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
}
);

sagaMiddleware.run(rootSaga);

export default store;
