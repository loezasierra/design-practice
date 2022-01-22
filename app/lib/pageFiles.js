import fs from 'fs'
import path from 'path'


const pagesDirectory = path.join(process.cwd(), 'pages')

export function getPagePathsAndIDs(path, excludePage = "") {
    const absolutePath = pagesDirectory + path
    let fileNames = fs.readdirSync(absolutePath)
    // Filter out excludePage
    fileNames = fileNames.filter(fileName => fileName != ''.concat(excludePage, '.js'))

    return fileNames.map(fileName => {
        const id = fileName.replace(/\.js$/, "")
        const href = path + '/' + id
        return {
            id,
            href
        }
    })
}
