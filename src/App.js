import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import CustomRoutes from './routes/index.js';
import { persistor, store } from './store/store';
import './App.css';
import GlobalSpinner from './components/spinner/GlobalSpinner.js';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <GlobalSpinner />
            <ToastContainer
              theme='light'
              autoClose={3000} />
            <CustomRoutes />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
