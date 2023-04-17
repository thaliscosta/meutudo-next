import { useJsonData } from '../../hooks/useJsonData';
import Image from 'next/image'
import style from './Purpose.module.scss';

const Purpose = () => {

    const jsonData = useJsonData();

    if (!jsonData) {
        return <div>Loading...</div>;
    }
    return (

        <section className={style.sPurpose}>
            <div className="container">
                <div className={style.grid}>
                    <div className="info">
                        <div className="box-title">
                            <h2 data-aos="fade-right" data-aos-duration="1500">{jsonData.section_5.label}</h2>
                            <h3 data-aos="fade-right" data-aos-duration="2000">{jsonData.section_5.title}</h3>
                            <p data-aos="fade-right" data-aos-duration="2500">{jsonData.section_5.text}</p>
                        </div>
                        <a href="" data-aos="fade-right" data-aos-duration="2500" className="btn">Simule agora</a>
                    </div>
                    <div className={style.img} data-aos="fade-left" data-aos-duration="1500">
                        <Image
                            src={require(`../../public/images/section_5_1.webp`)}
                            alt='MeuTudo'
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Purpose;