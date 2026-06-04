import styles from "./home.module.css";
import { Header } from "~/components/header/header";
import { Todos } from "~/components/todos/todos";
import { Users } from "~/components/users/users";

export function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.content}>
        <section className={styles.users}>
          <Users />
        </section>
        <section className={styles.todos}>
          <Todos />
        </section>
      </div>
    </div>
  );
}
