"use client"

import styles from "../app/index.module.css";
import React from 'react'
import { signOut } from '~/actions/auth'

export default function SignOut() {
  return (
    <button onClick={signOut} className={styles.loginButton}>sign out</button>
  )
}
