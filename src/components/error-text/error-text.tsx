import styles from "./error-text.module.css";

type Props = {
  text: string;
};

export function ErrorText({ text }: Props) {
  return <span className={styles.error}>{text}</span>;
}
