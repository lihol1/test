"use client"

import { useState } from "react";
import styles from "../app/page.module.scss";
import Filter from './Filter';
import LocationOptions from './LocationOptions';
import DateOptions from './DateOptions';
import ExtraOptions from './ExtraOptions';
import MaterialUI from './MaterialUI';
import Flour from './Flour';
// import ReactSelect from './ReactSelect';
import cross from '../../public/x.svg';
import Image from "next/image";
import dynamic from 'next/dynamic'

const ReactSelect = dynamic(() => import('./ReactSelect'), { ssr: false })

export default function Sidebar ({sidebarIsVisible}){ 
    const [toggle, setToggle] = useState(false) 

    function changeHandler(){
    }
    
    return (
    <aside className={sidebarIsVisible ? `${styles.sidebar} ${styles.active}` :styles.sidebar}>
        <form>
            <Filter header={'Близость к метро'}><LocationOptions /></Filter>
            <Filter header={'Дата сдачи'}><DateOptions /></Filter>
            <Filter header={'Дополнительные опции'}><ExtraOptions /></Filter>
            <Filter header={'MaterialUI'}><MaterialUI /></Filter>
            <Filter header={'Этажность'}><Flour /></Filter>
            <Filter header={'ReactSelect'}><ReactSelect /></Filter>

            <label className={styles.toggle}>
                <input type="checkbox" onChange={changeHandler} className={styles['filter-input']} id="service" name="service"/>
                <span className={toggle? `${styles['toggle-fake']} ${active}`:styles['toggle-fake']}></span>
                <span>Услуги 0%</span>
            </label>

            <input type="submit" value="Применить фильтры" className={styles.submit}/>
            <button type="button" className={styles.reset}>
                <Image src={cross} alt={'cross'} width={24} height={24}/>
                <span>Сбросить фильтры</span></button>
        </form>
    </aside>
    )
    
}

