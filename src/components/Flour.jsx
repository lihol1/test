import styles from "../app/page.module.scss";
import { useState} from "react";


export default function Flour () {    
    const options = [1, 5, 10, 20, "Любая"];    
    const [value, setValue] = useState('')   
           
    //Отключение кнопки Любая при выборе др параметров
    function handleChange (e){        
        setValue(e.target.value);                  
    }     
   
    return (        
        <div >
            <select onChange={handleChange} value={value} className={styles.select} name="flour" id="flour">
                {options.map((el,i)=>{                        
                    return <option key={i} value={i+1} className={styles['radio-holder']}>{el}</option>
                })} 
            </select>        
        </div>     
    )
};
