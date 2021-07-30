import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Custom404() {
	return (
		<Layout home>
			<Head>
				<title>404 Error</title>
			</Head>
			<div className={styles.header}>
				<h1 className={utilStyles.headingX1}>Page not found.<br/>This is a Custom 404 page.</h1>
			</div>
		</Layout>
	)
}