"use client"

import styles from "../app/index.module.css";
import React from 'react'
import { signInGitHub } from '~/actions/auth'

export default function SignInGithub() {
  return (
    <button onClick={signInGitHub} className={styles.loginButton}>sign in to github (custom signin)</button>
  )
}
