import { useJsonData } from '../../hooks/useJsonData';
import Image from 'next/image'
import style from './Benefits.module.scss';

const Benefits = () => {

    const jsonData = useJsonData();

    if (!jsonData) {
        return <div>Loading...</div>;
    }
    return (

        <section className={style.sBenefits}>
            <div className="container">
                <div className={style.gridBenefits}>

                    {jsonData.section_2.blocks.map((item, index) => (
                        <div className={style.item} key={index}>
                            <div className={style.ico}>
                                <Image
                                    src={require(`../../public/images/section_2_${index + 1}.webp`)}
                                    alt='MeuTudo'
                                />
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <a href="" className="btn">Simule agora</a>
                            </div>
                        </div>
                    ))}

                </div>

                <div className={style.boxCenter}>
                    <div className="box-title">
                        <h2>{jsonData.section_3.label}</h2>
                        <h3>{jsonData.section_3.title}</h3>
                    </div>
                    <p>{jsonData.section_3.text}</p>
                </div>

                <div className={style.gridItens}>

                    {jsonData.section_3.blocks.map((item, index) => (

                        <div className={style.item}>
                            <div className={style.ico}>
                                <Image
                                    src={require(`../../public/images/section_3_${index + 1}.webp`)}
                                    alt='MeuTudo'
                                />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>

                    ))}

                </div>
            </div>
        </section>
    );
};

export default Benefits;



