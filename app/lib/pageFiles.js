import fs from 'fs'
import path from 'path'

const pagesDirectory = path.join(process.cwd(), 'pages')

export function getPagePathsAndIDs(path) {
    const absolutePath = pagesDirectory + path
    const fileNames = fs.readdirSync(absolutePath)

    return fileNames.map(fileName => {
        const id = fileName.replace(/\.js$/, "")
        const href = path + '/' + id
        return {
            id,
            href
        }
    })
}
