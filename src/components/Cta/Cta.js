import { useJsonData } from '../../hooks/useJsonData';
import Image from 'next/image'
import style from './Cta.module.scss';

const Cta = () => {

    const jsonData = useJsonData();

    if (!jsonData) {
        return <div>Loading...</div>;
    }

    return (
        <section className={style.sCta}>
            <div className="container">
                <div className="box-center">
                    <div className={style.cta}>
                        <Image
                            src={require(`../../public/images/section_6_1.webp`)}
                            alt='MeuTudo'
                        />
                        <h3 dangerouslySetInnerHTML={{ __html: jsonData.section_6.text }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;



