import { useJsonData } from '../../hooks/useJsonData';

import style from './BannerTop.module.scss';
import image from '../../public/images/section_1_1.webp';

const BannerTop = () => {

    const jsonData = useJsonData();

    if (!jsonData) {
        return <div>Loading...</div>;
    }
    return (
        <section className={style.sTop} style={{ backgroundImage: `url(${image.src})` }}>
            <div className="container">
                <h1 dangerouslySetInnerHTML={{ __html: jsonData.section_1.text_1 }} />
            </div>
        </section>
    );
};

export default BannerTop;
