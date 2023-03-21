import Menu from '../componets/Menu';

const WorkerPage = () => {
  return (
    <div> 
      <h1>Worker page</h1>
      
      <header>
        <Menu>
          <a href="#vacancy">Вакансии</a>
          <a href="#contacts">Контакты</a>
        </Menu>
      </header>

      <main>
				<section className="section" id="vacancy">Вакансии</section>
				<section className="section" id="contacts">Контакты</section>
			</main>
    </div>
  );
};

export default WorkerPage;