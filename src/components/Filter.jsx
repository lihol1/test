import styles from "../app/page.module.scss";
import { useState} from "react";
import arrow from '../../public/chevron-up.svg';
import Image from "next/image";

export default function Filter ({children, header}){
    const [filterIsOpen, setFilterIsOpen] = useState(true);
    
     //Клик по кнопке для скрытия/показа фильтра и изменения иконки
     function locationHandler(){ 
        setFilterIsOpen(!filterIsOpen)   
    }

    return (
        <div className={styles.filter}>
            <div className={styles.header} onClick={locationHandler}>
                <div className={styles.title}>{header}</div>             
                <Image className={filterIsOpen ? `${styles.arrow} ${styles['arrow-up']}`:styles.arrow} src={arrow} alt={'building'} width={25} height={25} data-arrow/>             
                </div>
       
                {filterIsOpen && children}
            
        </div>
    )
}