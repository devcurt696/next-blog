import React from 'react'
import styles from './menuCategory.module.css'
import Link from 'next/link'

const MenuCategory = () => {
  return (
      <div className={styles.categoryList}>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>Style</Link>
        <Link href="/blog?cat=fashion" className={`${styles.categoryItem} ${styles.fashion}`}>Fashion</Link>
        <Link href="/blog?cat=food" className={`${styles.categoryItem} ${styles.food}`}>Food</Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.travel}`}>Travel</Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.culture}`}>Culture</Link>
      </div>
  )
}

export default MenuCategory