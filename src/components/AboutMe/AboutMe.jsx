import './AboutMe.css';
import studentPhoto from '../../images/studentPhoto.jpg';
import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from '../Portfolio/Portfolio';

const AboutMe = () => {
  return (
    <section className="student" id="about-me">
      <div className="student__title">
        <SectionTitle title="Студент" />
      </div>
      <div className="student__info">
        <img
          src={studentPhoto}
          alt="student"
          className="student__photo"
        />
        <div className="student__info_text">
          <p className="student__info_name">Руслан Рзаев</p>
          <p className="student__info_status">Фронтенд-разработчик, 32 года</p>
          <p className="student__info_description">
            Я занимаюсь веб-разработкой на протяжении двух лет. Меня интересует направление Frontend-разработки.
            Люблю создавать интерфейсы и всё что с ними связано. Нравится работать над интересными и сложными проектами. 
            Имею как командный, так и индивидуальный опыт работы.
          </p>
        </div>
        <a
          href="https://github.com/l9llika"
          className="student__info_link"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
      <Portfolio />
    </section>
  )
}

export default AboutMe;