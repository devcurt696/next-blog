'use client';
import Image from 'next/image';
import styles from './write.module.css';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import 'react-quill/dist/quill.bubble.css'
import { app } from '@/utility/firebase';



const WritePage = () => {
  const {status}  = useSession();
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);

    const upload = () => {
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, name);
      
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);
  

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push('/')
  }

  const slugify = (str) => 
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res =  await fetch('/api/posts', {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });

    if (res.status ===  200) {
      const data = await res.json();
      router.push(`/posts/${data.post.slug}`);
    }
  }

  return (
    <div className={styles.container}>
      <input 
        type='text'
        placeholder='Title'
        className={styles.input}
        onChange={e => setTitle(e.target.value)}
      />
      <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image 
            src='/plus.png'
            alt=''
            width={16}
            height={16}
          />
        </button>
        {open && (
          <div className={styles.add}>
            <input 
              type='file' 
              id="image" 
              onChange={e => setFile(e.target.files[0])}
              style={{ display: "none" }}  
            />
            
            <button className={styles.addButton}>
              <label htmlFor='image'>
                <Image src='/image.png' alt='' width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src='/external.png' alt='' width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src='/video.png' alt='' width={16} height={16} />
            </button>
          </div>
        )} 
        <ReactQuill 
          className={styles.textArea}
          theme='bubble' 
          value={value} 
          onChange={setValue} 
          placeholder='Write a blog post.' 
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>Publish</button>
    </div>
  );
}

export default WritePage;