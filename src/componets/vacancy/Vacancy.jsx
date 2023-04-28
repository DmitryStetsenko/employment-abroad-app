import React from 'react';

const Vacancy = () => {
	return (
		<div class="vacancy">
			<div class="vacancy__content-block">
				<div class="vacancy__thumbnail">
					<img src="./img/vacancy-thumb.jpg" alt="" />
				</div>
				<div class="vacancy__content">
					<h3 class="vacancy__title">Работа на тепличном предприятии</h3>
					<div class="vacancy__meta">
						<ul class="meta-info">
							<li class="meta-info__item">
								<i class="meta-info__item-icon fa-solid fa-location-dot"></i>
								<div class="meta-info__item-value">
									<a href="#">Польша</a>
									<a href="#">Катовице</a>
								</div>
							</li>
							<li class="meta-info__item">
								<i class="meta-info__item-icon fa-solid fa-suitcase"></i>
								<div class="meta-info__item-value">
									<a href="#">Упаковщик</a>
									<a href="#">Разнорабочий</a>
								</div>
							</li>
							<li class="meta-info__item">
								<i class="meta-info__item-icon fa-solid fa-gear"></i>
								<div class="meta-info__item-value">
									<a href="#">На теплицах</a>
								</div>
							</li>
							<li class="meta-info__item">
								<i class="meta-info__item-icon fa-regular fa-calendar"></i>
								<div class="meta-info__item-value">
									<a href="#">Пн-Сб - 8-12ч</a>
								</div>
							</li>
						</ul>
					</div>
					<div class="vacancy__text">
						Приглашаем на работу: мужчин, женщин, семейные пары от 20 до 50 лет.
						Есть возможность индивидуального согласования кандидатов младшего и старшего возраста.
					</div>
				</div>
			</div>
			<div class="vacancy__salary-block">
				<div class="vacancy__salary">USD: 2000-2200</div>
				<button class="vacancy__details">Подробнее</button>
			</div>
		</div>
	);
};

export default Vacancy;
