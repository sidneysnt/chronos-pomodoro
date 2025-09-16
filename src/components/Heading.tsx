import styles from './Heading.module.css';

export function Heading(props) {
  return <h1 className={styles.heading}>{props.children}</h1>;
type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}