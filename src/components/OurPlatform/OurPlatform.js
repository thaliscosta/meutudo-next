import { useJsonData } from '../../hooks/useJsonData';
import Image from 'next/image'
import style from './OurPlatform.module.scss';

const OurPlatform = () => {

    const jsonData = useJsonData();

    if (!jsonData) {
        return <div>Loading...</div>;
    }
    return (

        <section className={style.sOurPlatform}>
            <div className="container">
                <div className={style.box}>
                    <div className={style.img}>
                        <Image
                            src={require(`../../public/images/section_4_1.webp`)}
                            alt='MeuTudo'
                        />
                    </div>
                    <div className={style.info}>
                        <div className="box-title">
                            <h2>{jsonData.section_4.label}</h2>
                            <h3>{jsonData.section_4.title}</h3>
                            <ul>
                                {jsonData.section_4.list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <div className={style.shop}>
                                <a href="" target="_blank">
                                    <Image
                                        src={require(`../../public/images/app_google.webp`)}
                                        alt='MeuTudo'
                                    />
                                </a>
                                <a href="" target="_blank">
                                    <Image
                                        src={require(`../../public/images/app_apple.webp`)}
                                        alt='MeuTudo'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPlatform;



