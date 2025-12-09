import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './styles/index.css'
import { Routing } from './router'
import { Provider } from 'react-redux'
import { store } from './store'
import { LocaleProvider } from '@douyinfe/semi-ui'
import ru_RU from '@douyinfe/semi-ui/lib/es/locale/source/ru_RU';
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <LocaleProvider locale={ru_RU}>
        <Routing />
        <ToastContainer position="top-center" autoClose={2000} />
      </LocaleProvider>
    </Provider>
  </BrowserRouter>,
)
