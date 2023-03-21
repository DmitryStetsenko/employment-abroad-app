import Menu from "../componets/Menu";

const EmployerPage = () => {
  return (
    <div>
      <h1>Employer</h1>

      <header className="section" id="#header">
				<Menu />
			</header>

      <main>
				<section className="section" id="contacts">Контакты</section>
			</main>
    </div>
  );
};

export default EmployerPage;