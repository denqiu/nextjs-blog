import fs from 'fs'
import path from 'path'

const apiDirectory = path.join(process.cwd(), 'pages/api')

export async function getSortedAPIs() {
	const fileNames = fs.readdirSync(apiDirectory).map(fileName => {
		return {
			id: fileName.replace(/\.js$/, '')
		}
	})
	// Sort file names alphabetically
	return fileNames.sort(({id: a}, {id: b}) => {
		if (a < b) {
			return -1
		} else if (a > b) {
			return 1
		} else {
			return 0
		}
	})
}