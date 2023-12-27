import React from 'react'
import styles from './singlePage.module.css';
import Menu from '@/components/Menu/Menu';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("failed");
    }
    
    return res.json();
  }

const SinglePage = async ({params}) => {

   const { slug } = params;
   const data = await getData(slug);
    console.log(data);
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>{data?.post.title}</h1>
               {data.image && ( 
                <div className={styles.userImageContainer}>
                    <Image 
                    src='/p1.jpeg'
                    alt=''
                    fill
                    className={styles.avatar}
                />
                </div>
                )}
            <div className={styles.userTextContainer}>
                <span className={styles.username}>{data?.}</span>
                <span className={styles.date}>10.16.2023</span>
            </div>
        </div>
        <div className={styles.imageContainer}>
            <Image 
                src="/p1.jpeg"
                alt=''
                fill
                className={styles.image}
            />
        </div>
        </div>
        
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                {data?.post.desc}
                </div>
                <div className={styles.comment}>
                    <Comments />
                </div>
            </div>
            <Menu />
        </div>
    </div>
  )
}

export default SinglePage