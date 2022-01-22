import fs from 'fs'
import path from 'path'


const publicDirectory = path.join(process.cwd(), 'public')

export function getFileNamesAndIDs(path) {
    const absolutePath = publicDirectory + path
    const fileNames = fs.readdirSync(absolutePath)

    return fileNames.map(fileName => {
        const id = fileName.replace(/\.jpg$|\.png$/, "")
        const filePath = path + '/' + fileName
        return {
            id,
            filePath
        }
    })
}
