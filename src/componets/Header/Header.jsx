import { Menu, TopHeader } from './';
import { Link, useLocation } from 'react-router-dom';
import { SearchForm } from '../forms/SearchForm';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
	const { pathname } = useLocation();

	const isMobile = useMediaQuery({ maxWidth: 550 });

	const routingData = {
		account: {
			// link: 'http://admin.liftron.com.ua',
			link: '/account',
			isOuter: false,
			inPage: false,
		},
		headerBtn: {
			link: 'vacancies',
			text: 'Переглянути вакансії',
		},
	};

	let isEmployer = false;

	if (pathname === '/') {
		isEmployer = false;
		routingData.account.link = '/account';
		routingData.account.isOuter = false;
		routingData.headerBtn.link = 'vacancies';
		routingData.headerBtn.text = 'Переглянути вакансії'
	}

	if (pathname.includes('employer')) {
    isEmployer = true;
		routingData.account.link = '/account/employer';
		routingData.account.isOuter = false;
		routingData.headerBtn.link = '/account/employer';
		routingData.headerBtn.text = 'Розмістити вакансію'
  }

	if (pathname.includes('account')) {
		routingData.account.inPage = true;
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
						<Link to="/" className="logo menu-header__item">
							{
								!isMobile 
									? <img src="/img/logo-full-dark.svg" alt="logo liftron" />
									: <img src="/img/logo-full-img-only.svg" alt="logo liftron" />
							}
						</Link>
						<div className="menu-header__search-block menu-header__item">
							
							<SearchForm />

						</div>

						<Menu />
						
						<Link to={ routingData.headerBtn.link } className="btn btn_start menu-header__item">
							{ routingData.headerBtn.text }
						</Link>

					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;