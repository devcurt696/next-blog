import React from 'react'
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b className={styles.bold}>Hey, I am Curtis.</b> This is my blog about web development!</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image 
            src="/p1.jpeg" alt='' 
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt 
            numquam voluptatem esse illum pariatur voluptates ipsum sequi quam aspernatur 
            nam facere, quaerat facilis enim cum nobis in molestias reiciendis corporis?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured;