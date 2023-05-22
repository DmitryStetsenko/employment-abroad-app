import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <h2 className="about__title section-title">About us</h2>
      <div className="about__content">
        <div className="about__content-part">
          Ми – українська компанія з працевлаштування за кордоном.
          <Link to="account" className="about__link">Допомагаємо кандидатам знаходити роботу по спеціальності</Link>, 
          <Link to="account/employer" className="about__link">а компаніям закривати вакансії.</Link>
          <Link to="vacancies" className="about__link">Надаємо безкоштовні вакансії від європейських роботодавців.</Link>
          <p className="about__content-part">
            Надаємо інші варіанти роботи в тому випадку, якщо роботодавець порушить правила договору.
          </p>
        </div>
        <ul className="about__content-part advantages">
          <li className="advantages__item">
            <span><i className="fa-solid fa-file-signature"></i></span>
            <span>Надаємо усім сторонам гарантію, підписуємо договір;</span>
          </li>
          <li className="advantages__item">
            <span><i className="fa-solid fa-user-check"></i></span>
            <span>Уважно розглядаємо потреби клієнта;</span>
          </li>
          <li className="advantages__item">
            <span><i className="fa-solid fa-person-shelter"></i></span>
            <span>підтримуємо кандидата на всіх етапах;</span>
          </li>
        </ul>
        <p className="about__content-part">
          Ми не любимо зайвих слів та хочемо щоб все було максимально просто, доступно та ефективно
          Якщо у Вас виникли питання, то можете зв'язатися з нами.
        </p>
        <Link to="contacts" className="about__link">
          <span><i className="fa-solid fa-file-signature"></i></span>
          <span>Наші контакти.</span> 
        </Link>
      </div>
    </div>
  );
};

export default About;