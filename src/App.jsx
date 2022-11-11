import React from 'react';
import Theme from 'styles/theme';
import { Provider } from 'react-redux'; // para que el componente pueda ser importado desde otros archivos
import { HelmetProvider } from 'react-helmet-async'; // controla las fugas de memoria en el header de la aplicación (permite escribir en el header de forma segura)
import store from 'redux/store/store'; // almacena todos los estados de la aplicacion y estado se refiere al contenido de cada una de las variables que se encuentran en el store
import Layout from 'layouts/Layout'; // es el esqueleto de la aplicacion, es el que se encarga de renderizar el contenido de la aplicacion
import ErrorNotification from 'components/atoms/errorNotification/ErrorNotification';
import HomePage from 'pages/HomePage';

const App = () => (
    // Almacena el estado de la aplicación y permite actualizarlo mediante acciones (dispatch)
    <Provider store={store}>
        <HelmetProvider>
            <Theme>
                <Layout>
                    <ErrorNotification />
                    <HomePage />
                </Layout>
            </Theme>
        </HelmetProvider>
    </Provider>
);

export default App;
 