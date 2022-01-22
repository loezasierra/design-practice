import fs from 'fs'
import path from 'path'


const publicDirectory = path.join(process.cwd(), 'public')

export function getImagePathsAndIDs(path) {
    const absolutePath = publicDirectory + path
    const fileNames = fs.readdirSync(absolutePath)

    return fileNames.map(fileName => {
        const id = fileName.replace(/\.jpg$|\.png$|\.svg$/, "")
        const filePath = path + '/' + fileName
        return {
            id,
            filePath
        }
    })
}
