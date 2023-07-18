import Head from 'next/head';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import 'quill/dist/quill.snow.css'; //import styles
import React, { useState, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";


const QuillNoSSRWrapper = dynamic(
  () => import('react-quill'), 
  { ssr: false }
);

export default function Home() {
  const [focusMode, setFocusMode] =
    useState(false);
  const handle = useFullScreenHandle();  // Full screen handle
  const [navVisible, setNavVisible] = useState(true);
  const [showNavButton, setShowNavButton] = useState(false);

  const toolbarOptions = [
                ['bold', 'italic', 'underline'], // toggled buttons
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['clean'], // remove formatting button
                ['toggle']
              ]
  
  return (
    <FullScreen handle={handle}>
    <div className= {styles.gridContainer}>
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation column */}
       <div className= {(!navVisible || focusMode) ? styles.hide : `${styles.colNav} ${styles.gridColumn}`}>

  {/* Navigation 1 */}
  <nav className={`${styles.nav} ${styles.nav1}`}>
    
  {/* Primary button */}
  <div className={`${styles.navItem} ${styles.panel} ${styles.primary}`}>
    <p>No Country For Old Men</p>
    <button onClick={() => setNavVisible(!navVisible)}>Toggle Nav</button>
  </div>

  {/* Version control button */}
  <div className={`${styles.navItem} ${styles.panel} ${styles.main}`}>
    <p>Main</p>
    <div className={styles.iconContainer}>
      <span className= "material-symbols-outlined">account_tree</span>
    </div>
  </div>

    {/* Search button */}
  <div className={`${styles.navItem} ${styles.panel} ${styles.search}`}>
    <p>Search</p>
    <div className={styles.iconContainer}>
      <span className="material-symbols-outlined">search</span>
    </div>
  </div>
  </nav>

  {/* Navigation 2 */}
  <nav className = {`${styles.nav} ${styles.nav2}`}>
    <div className = {styles.navTitle}>e
      <p>Highlight</p>
    </div>
    <div className ={`${styles.navItem} ${styles.file} ${styles.chapter1}`}>
      <span className = "material-symbols-outlined"> description</span>
      <p>Chapter 1</p>
    </div>
    <div className ={`${styles.navItem} ${styles.file} ${styles.antonChigurh}`}>
      <span className = "material-symbols-outlined"> description</span>
      <p>Anton Chigurh</p>
    </div>
  </nav>

<div className={`${styles.navItem} ${styles.newFile}`}>
      <p className="title">+ New File</p>
    </div>
         {/* Focus button */}
<div 
  className={`${styles.navItem} ${styles.focusPanel}`}
  onClick={() => {
    setFocusMode(true);
    handle.enter();
  }}>
  <p>Focus</p>
  <span className="material-symbols-outlined">Fullscreen</span>
</div>
         
      </div> {/* Navigation column end */}

      {/* Editor pane */}
      
      <div className= {`${styles.colEditor} ${styles.gridColumn} ${focusMode ? styles.focus : ''}`}>
        <QuillNoSSRWrapper 
          modules={{ 
              toolbar: toolbarOptions
            }} 
            theme="snow"
          />
      </div>
        
        {/* Web pane */}
      <div className= {focusMode ? styles.hide : `${styles.colWeb} ${styles.gridColumn}`}>
        <iframe
          src="https://wordlewebsite.com/"
          title="Webpane"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          className={styles.webPane}
          allowFullScreen
        ></iframe>
      </div>

    {focusMode && (
  <button onClick={() => {
    setFocusMode(false);
    handle.exit();
  }}>
    <span className=
      "material-symbols-outlined">Fit_screen</span>
  </button>
)}
      {/* Toggle Nav button */}
        {!navVisible && !focusMode && (
          <button
            className={styles.toggleNavButton}
            onClick={() => {
              setNavVisible(true);
              setShowNavButton(false);
            }}
          >
            Toggle Nav
          </button>
        )}
      </div>
    </FullScreen>
  );
}