import styles from "../app/page.module.scss";
import { useState} from "react";


export default function DateOptions () {    
    const inputs = ['Любой', 'Сдан', 'В этом году', 'В следующем году'];    
    const [value, setValue] = useState('')   
       
    //Отключение кнопки Любая при выборе др параметров
    function radioHandler (e){        
        setValue(e.target.value);                  
    }     
   
    return (        
        <div className={styles['date-options']}>
            <ul >
                {inputs.map((el,i)=>{                        
                    return (
                        <li key={i} className={styles['radio-holder']}>                            
                            <label>
                                <input type="radio" className={styles['filter-input']} value={i+1} checked={value == i+1 ? true : false} id={`date-${i+1}`} name="date" onChange={radioHandler}/>  
                                <span className={styles.radio}></span> 
                                <span className={styles.text}>{el}</span>                                
                            </label>
                        </li>
                    )
                })} 
            </ul>        
        </div>     
    )
};
