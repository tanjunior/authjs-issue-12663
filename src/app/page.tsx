import Link from "next/link";

import styles from "./index.module.css";
import SignInGithub from "~/components/SignInGithub";
import { auth } from "~/server/auth";
import SignOut from "~/components/SignOut";

export default async function Home() {
  const session = await auth();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {session ? (
          <>
            <span className={styles.showcaseText}>{session.user.name}</span>
            <SignOut />
          </>
        ) : (
          <>
            <Link href={"/api/auth/signin"} className={styles.loginButton}>
              Default Sign in
            </Link>
            <SignInGithub />
          </>
        )}
        <h1 className={styles.title}>
          Create <span className={styles.pinkSpan}>T3</span> App
        </h1>
        <div className={styles.cardRow}>
          <Link
            className={styles.card}
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className={styles.cardTitle}>First Steps →</h3>
            <div className={styles.cardText}>
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className={styles.card}
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className={styles.cardTitle}>Documentation →</h3>
            <div className={styles.cardText}>
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
