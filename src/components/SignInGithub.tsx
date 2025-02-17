"use client"

import React from 'react'
import { signInGitHub } from '~/actions/auth'

export default function SignInGithub() {
  return (
    <button onClick={signInGitHub}>sign in to github</button>
  )
}
