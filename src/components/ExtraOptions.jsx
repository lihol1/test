

import styles from "../app/page.module.scss";
import { useState} from "react";
import check from '../../public/check.svg';
import Image from "next/image";

export default function ExtraOptions () {    
    const inputs = ['Двор без машин', 'Высокие потолки', 'Панорамные окна', 'Есть кладовые', 'Малоэтажный', 'Дополнительный пункт 1', 'Дополнительный пункт 2', 'Дополнительный пункт 3'];    
    const [boxesStates, setBoxesStates] = useState(new Array(inputs.length).fill(false));
    const [extraOptions, setExtraOptions] = useState(false)

     //Отключение кнопки Любая при выборе др параметров
    function changeHandler (i){
        setBoxesStates(boxesStates.map((elem, index)=>{            
            if(i===index) return !elem 
            return elem           
            })  );            
    } 

    function extraHandler(){
        setExtraOptions(!extraOptions)
    }
   
    return (
        <>
            <div className={styles['filter-options']}>
            <ul>
                {inputs.map((el,i)=>{ 
                    if(i<=4){                         
                    return (
                        <li key={i} className={styles['box-holder']}>
                            <label>
                                <input type="checkbox" className={styles['filter-input']} checked={boxesStates[i]} id={`extra-${i+1}`} name="{`extra-${i+1}`}" onChange={()=>changeHandler(i)}/>
                                <span className={styles.box}></span>
                                {boxesStates[i] && <Image src={check} alt="checkmark" className={styles['box-icon']}></Image>}
                                <span className={styles.text}>{el}</span>
                            </label>
                        </li>
                    )}
                })} 
                {extraOptions&& inputs.map((el,i)=>{ 
                    if(i>4){                      
                    return (
                        <li key={i} className={styles['box-holder']}>
                            <label>
                                <input type="checkbox" className={styles['filter-input']} checked={boxesStates[i]} id={`extra-${i+1}`} name="{`extra-${i+1}`}" onChange={()=>changeHandler(i)}/>
                                <span className={styles.box}></span>
                                {boxesStates[i] && <Image src={check} alt="checkmark" className={styles['box-icon']}></Image>}
                                <span className={styles.text}>{el}</span>
                            </label>
                        </li>
                    )
                    }
                })}               

            </ul>
            <button type="button" className={styles.extrabutton} onClick={extraHandler}>{extraOptions ? 'Скрыть дополнительные опции': 'Показать еще'}</button>
            
        </div> 
    </>
    )
    
};
