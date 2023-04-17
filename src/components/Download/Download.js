import { useJsonData } from '../../hooks/useJsonData';
import Image from 'next/image'
import style from './Download.module.scss';

const Download = () => {

    const jsonData = useJsonData();

    if (!jsonData) {
        return <div>Loading...</div>;
    }
    return (

        <section className={style.sDownload}>
            <div className="container">
                <div className={style.block}>
                    <div className={style.img}>
                        <Image
                            src={require(`../../public/images/section_7_1.webp`)}
                            alt='MeuTudo'
                        />
                    </div>
                    <div className={style.info}>
                        <h2 dangerouslySetInnerHTML={{ __html: jsonData.section_7.text }} />
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
        </section>

    );
};

export default Download;