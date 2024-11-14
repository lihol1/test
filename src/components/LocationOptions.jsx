import styles from "../app/page.module.scss";
import { useState} from "react";


export default function LocationOptions () {    
    const inputs = ['< 10', '10-20', '20-30', '30 +'];
    const [boxesStates, setBoxesStates] = useState(new Array(inputs.length).fill(false));
    const [anyActive, setAnyActive] = useState(false);  

     //Отключение кнопки Любая при выборе др параметров
     function locHandler (i){ 
        if(anyActive) setAnyActive(false)
        const changedStates = boxesStates.map((elem, index)=>{            
            if(i===index) return !elem 
            return elem           
            })  
        setBoxesStates(changedStates);            
    }  

    //Выбор кнопки Любая и отключение др чекбоксов    
    function anyBoxHandler (){         
        setAnyActive(!anyActive)          
        if(!anyActive){
            setBoxesStates(boxesStates.map(()=>{            
                return false           
            }))
        }
        
    }
   
    return (
        <>
            <div className={styles['metro-options']} >
            <ul className={styles.row}>
                {inputs.map((el,i)=>{                        
                    return (
                        <li key={i}>
                            <input type="checkbox" className={styles['filter-input']} checked={boxesStates[i]} id={`location-${i+1}`} name="location" onChange={()=>locHandler(i)}/>
                            <label htmlFor={`location-${i+1}`} className={styles['location-btn']} >{el}</label>
                        </li>
                    )
                })}               

            </ul>
            <div className={styles.row}>
                <input type="checkbox" className={styles['filter-input']} checked={anyActive} id="location-5" name="location-5" onChange={anyBoxHandler}/>
                <label htmlFor="location-5" className={styles['location-btn']}>Любая</label>
            </div>
        </div> 
    </>
    )
    
};

