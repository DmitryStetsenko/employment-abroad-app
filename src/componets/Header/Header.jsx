import { Menu, TopHeader } from './';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
	const { pathname } = useLocation();

	const routingData = {
		account: {
			link: 'http://admin.liftron.com.ua',
			isOuter: true,
		},
		headerBtn: {
			link: '/account',
			text: 'Начать поиск работы',
		},
	};

	let isEmployer = false;

	if (pathname === '/') {
		isEmployer = false;
		routingData.account.link = '/account';
		routingData.account.isOuter = false;
		routingData.headerBtn.link = '/account';
		routingData.headerBtn.text = 'Начать поиск работы'
	}

	if (pathname.includes('employer')) {
    isEmployer = true;
		routingData.account.link = '/account/employer';
		routingData.account.isOuter = false;
		routingData.headerBtn.link = '/account/employer';
		routingData.headerBtn.text = 'Разместить вакансию'
  }

	return (
		<header className="header">
			<div className="top-header-block">
				<div className="container">
					
					<TopHeader routingData={ routingData }/>

				</div>
			</div>
			<div className="menu-header-block">
				<div className="container">
					<div className="menu-header">
						<Link to="/" className="logo">
							<img src="/img/logo-full-dark.svg" alt="logo liftron" />
						</Link>
						<div className="menu-header__search-block">
							<div className="search-form">
								<i className="fa-solid fa-magnifying-glass search-form__icon"></i>
								<input type="text" className="search-form__input" />
							</div>
						</div>

						<Menu />
						
						<Link to={ routingData.headerBtn.link } className="btn btn_start">
							{ routingData.headerBtn.text }
						</Link>

					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;