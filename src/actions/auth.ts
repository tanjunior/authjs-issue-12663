"use server";

import { signIn, signOut as naSignOut } from "~/server/auth";

export async function signInGitHub() {
  try {
    await signIn("github");
  } catch (error) {
    console.log(error)
  }
}

export async function signOut() {
  await naSignOut();
}
