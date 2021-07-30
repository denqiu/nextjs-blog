import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedAPIs} from '../lib/apis'

export async function getStaticProps() {
	const allAPIs = await getSortedAPIs()
	return {
		props: {allAPIs}
	}
}

const siteTitle = 'APIs'

export default function ApiPage({allAPIs}) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>{siteTitle}</h2>
				<ul>
					{allAPIs.map(({id}) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/api/${id}`}>
								<a>{id}</a>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}