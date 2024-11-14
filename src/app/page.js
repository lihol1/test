'use client'
import styles from "./page.module.scss";
import Card from '../components/Card'; 
import Burger from '../components/Burger'; 
import Sidebar from '../components/Sidebar';
import { useState} from "react";


export default function Home() {
  
  const [sidebarIsVisible, setSidebarIsVisible]=useState(true)  

  return (
    <>
      <Burger sidebarIsVisible={sidebarIsVisible} setSidebarIsVisible={setSidebarIsVisible} />
      <div className="container">
        <main className={styles.main}>
          <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <Sidebar sidebarIsVisible={sidebarIsVisible} />
        </main>
        <footer className={styles.footer}>
                   
        
        </footer>
      </div>
    </>
  );
}
