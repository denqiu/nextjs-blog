import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {allPostsData}
	}
}

export default function HomePage({allPostsData}) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hi. My name is Dennis Qiu and I am a Computer Science grad with a Bachelors degree. 
					I enjoy programming in various languages, such as Java, Python, JavaScript, and Perl. 
					This is my first React Next.js app.
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({id, date, title}) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}