import './app.module.css'
import LoginLayout from './components/layout/loginLayout/LoginLayout'

import { Route, Switch } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import UsersProvider from './context/UsersContext/UsersProvider'
import NotesProvider from './context/NotesContext/NotesProvider'

function App() {
	return (
		<UsersProvider>
			<div className='App'>
				<Switch>
					<Route exact path={'/'}>
						<LoginLayout>
							<LoginPage />
						</LoginLayout>
					</Route>
					<Route exact path={'/register'}>
						<LoginLayout>
							<RegisterPage />
						</LoginLayout>
					</Route>
					<Route exact path={'/dashboard'}>
						<NotesProvider>
							<DashboardPage />
						</NotesProvider>
					</Route>
				</Switch>
			</div>
		</UsersProvider>
	)
}

export default App
