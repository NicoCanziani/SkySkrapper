import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

export default () => {
  const sagaMiddleware = createSagaMiddleware(); //Al llamar a esta funcion estamos creando el middleware o una nueva instancia
  return {
    ...configureStore(reducers, applyMiddleware(sagaMiddleware)), //recibe como parametros reducers y los middlewares (1 solo en este caso)
    runSaga: sagaMiddleware.run(sagas),//2 parametros pendientes reducers y sagas 
  };
};
