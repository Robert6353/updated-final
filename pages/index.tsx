import Head from 'next/head';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import 'quill/dist/quill.snow.css';
import React, { useState } from 'react';

const QuillNoSSRWrapper = dynamic(
  () => import('react-quill'), 
  { ssr: false }
);

export default function Home() {
  const [focusMode, setFocusMode] =
    useState(false);
  
  return (
    <div className= {styles.gridContainer}>
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation column */}
       <div className= {focusMode ? styles.hide : `${styles.colNav} ${styles.gridColumn}`}>

      {/* Navigation 1 */}
      {/* Primary button */}
      <nav className={`${styles.nav} ${styles.nav1}`}>
  <div className={`${styles.navItem} ${styles.panel} ${styles.primary}`}>
    <p>No Country For Old Men</p>
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


      <nav className = {`${styles.nav} ${styles.nav2}`}>
        <div className = {styles.navTitle}>
          <p>Focus</p>
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
         
        <button onClick={() => setFocusMode(!focusMode)}>
  {focusMode ? 'Exit Focus' : 'Focus'}
</button>
      </div>

      {/* Editor column */}
      <div className= {`${styles.colEditor} ${styles.gridColumn} ${focusMode ? styles.focus : ''}`}>
        {focusMode && <button onClick={() => setFocusMode(false)}>Exit Focus</button>}
        <QuillNoSSRWrapper />
      </div>
        
        {/* YouTube column */}
      <div className= {focusMode ? styles.hide : `${styles.colYoutube} ${styles.gridColumn}`}>
        <iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube Embed"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          className={styles.youtubeIframe}
          allowFullScreen
        ></iframe>
      </div>
    </div>     
  );
}
