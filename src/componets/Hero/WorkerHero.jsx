import { Link } from "react-router-dom";
import Slogan from "./Slogan";

const WorkerHero = () => {
    return (
        <>
            <div className="hero-block__img">
                
                <Slogan style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}/>

                <img src="/img/main-bg.jpg" alt="" />
            </div>
            <div className="container container_full-height">
                <div className="hero">
                    <div className="hero__content">
                        <div className="hero__title-block">
                            <h1 className="hero__title">Liftron</h1>
                            <div className="hero__subtitle-block">
                                <p className="hero__subtitle">Recruting company</p>
                            </div>
                            
                            <div className="hero__slogan"></div>
                            
                            <div className="hero__video-block">
                                <i className="fa-solid fa-play"></i>
                            </div>
                        </div>
                        <div className="hero__action-block">
                            <Link to="/account" className="btn btn_start">Розпочати пошук роботи</Link>
                            <a href="#vacancy" className="btn btn_stroke">Перегляд вакансий</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkerHero;