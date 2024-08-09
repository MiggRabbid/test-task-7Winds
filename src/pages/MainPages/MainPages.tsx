import styles from './MainPages.module.scss';

const MainPage = () => {
  console.log('----- MainPage')
  return (
    <main className={styles.container}>
      <section id="main-header" className={styles.header}>Header</section>
      <section id="main-body" className={styles.body}>Body</section>
    </main>
  )
}

export default MainPage;