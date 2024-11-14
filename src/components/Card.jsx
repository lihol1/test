import styles from '../app/page.module.scss';


export default function Card (){
    return (
        <div className={styles.card}>
            <div className={styles.imgblock}>
                <img src="./img.jpg" alt="building" width={279} height={200}/>
                <div className={styles.badges}>
                    <div className={`${styles.badge} ${styles.yellow}`}>Комфорт</div>
                    <div className={`${styles.badge} ${styles.green}`}>Рассрочка 12 мес.
                    </div>
                </div>
            </div>
            <div className={styles.infoblock}>               
                <div className={styles.title}>ЖК Ильинские луга</div>
                <div className={styles.date}>Срок сдачи до 4 кв. 2022 г.</div>
                <div className={styles.street}>Октябрьская</div>
                <div className={styles.adress}>пр. Льва Толстого 180А</div>
            </div>
       </div>
    )
}