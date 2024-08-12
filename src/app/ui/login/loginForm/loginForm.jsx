"use client";

import { useState } from "react";
import { authenticate } from "../../../lib/actions.js";
import styles from "./loginForm.module.css";
import { IoSchoolSharp } from "react-icons/io5";
import Image from "next/image.js";
import Link from "next/link.js";



const LoginForm = () => {
  const [err, setErr] = useState();
  const handleLogin = async (formData) =>{
    const data = await authenticate(formData);
    data.error && setErr(data.error);
  }
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <form action={handleLogin} className={styles.form}>
          <h3 className={styles.h1}>Connectez-vous</h3>
            <hr className={styles.hr}/>
            <div className={styles.title}>
              <IoSchoolSharp />
              <p className={styles.p}>MemoArchive</p>
            </div>
            <label htmlFor="matricule" className={styles.label}>N°matricule</label>
            <input type="text" placeholder="N°matricule étudiant en MAJSUCULE" name="matricule" id="matricule" className={styles.input} required />
            <label htmlFor="password" className={styles.label}>Mot de passe</label>
            <input type="password" placeholder="Entrez votre mot de passe" name="password" id="password" className={styles.input} required />
            <p className={styles.error}>{err && err }</p>
            <button className={styles.button} type="submit" >Connexion</button>
            <p className={styles.p}>
              <Link href="#" className={styles.link} >Mot de passe oublier?</Link>
            </p>
        </form>
      </div>
      <div className={styles.pic}>
      <Image src="/SoutenaceDay.jpg"
      className={styles.img}
      width={450} height={100}
      alt="" />
      </div>
    </div>
  );
};

export default LoginForm;
