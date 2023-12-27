import Link from 'next/link';
import styles from './comments.module.css';
import Image from 'next/image';

const Comments = () => {
    const status = "authenticated";

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder='write a comment...' className={styles.input} />
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link 
                    href="/login"
                >
                    Login to write posts
                </Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image 
                            src="/p1.jpeg"
                            alt=''
                            height={50}
                            width={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Jane Doe</span>
                            <span className={styles.date}>11.27.2023</span>
                        </div>
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mole
                        stias aspernatur, enim, officiis tenetur animi at qui nisi nam
                        ratione iure, eaque ipsum aliquam eos! Iure illo harum officia 
                        sint esse!
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image 
                            src="/p1.jpeg"
                            alt=''
                            height={50}
                            width={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Jane Doe</span>
                            <span className={styles.date}>11.27.2023</span>
                        </div>
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mole
                        stias aspernatur, enim, officiis tenetur animi at qui nisi nam
                        ratione iure, eaque ipsum aliquam eos! Iure illo harum officia 
                        sint esse!
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image 
                            src="/p1.jpeg"
                            alt=''
                            height={50}
                            width={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Jane Doe</span>
                            <span className={styles.date}>11.27.2023</span>
                        </div>
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mole
                        stias aspernatur, enim, officiis tenetur animi at qui nisi nam
                        ratione iure, eaque ipsum aliquam eos! Iure illo harum officia 
                        sint esse!
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image 
                            src="/p1.jpeg"
                            alt=''
                            height={50}
                            width={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Jane Doe</span>
                            <span className={styles.date}>11.27.2023</span>
                        </div>
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mole
                        stias aspernatur, enim, officiis tenetur animi at qui nisi nam
                        ratione iure, eaque ipsum aliquam eos! Iure illo harum officia 
                        sint esse!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comments