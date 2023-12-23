import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image 
            src="/logo.png"
            alt='supablog'
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>Supablog</h1>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam ipsum
          sed! Quidem labore corporis blanditiis quisquam eligendi amet illo iusto 
          aspernatur minus, ut fugit, quaerat tenetur iure et. Obcaecati.
        </p>
        <div className={styles.icons}>
          <Image 
            src='/facebook.png'
            alt=''
            width={18}
            height={18}
          />
          <Image 
            src='/instagram.png'
            alt=''
            width={18}
            height={18}
          />
          <Image 
            src='/tiktok.png'
            alt=''
            width={18}
            height={18}
          />
          <Image 
            src='/youtube.png'
            alt=''
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">TikTok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer