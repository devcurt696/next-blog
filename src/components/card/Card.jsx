import Link from 'next/link';
import styles from './card.module.css';
import Image from 'next/image'
const Card = () => {
  return (
    <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image 
             src="/p1.jpeg"
             alt=''
             fill
             className={styles.image}
            />

          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>Culture</span>
            </div>
            <Link href="/">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </Link>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas labore deserunt libero voluptatibus temporibus ratione dicta eum harum explicabo laboriosam enim, eius officia, autem quis quia nostrum? Modi, nam nostrum?</p>
            <Link href="/" className={styles.link}>
             Read More
            </Link>
          </div>
        </div>
  );
};

export default Card