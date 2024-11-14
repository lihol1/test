import styles from "../app/page.module.scss";

export default function Burger ({sidebarIsVisible, setSidebarIsVisible}){
    
    function clickHandler(){
        setSidebarIsVisible(!sidebarIsVisible)
      }
    return (
        <>
        <div className={sidebarIsVisible? `${styles.burger} ${styles.active}`: styles.burger} onClick={clickHandler}>
            <span className={styles['burger-icon']}></span>
        </div></>

    )
}