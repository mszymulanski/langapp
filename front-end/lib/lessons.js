import fs from 'fs'
import path from 'path'

const lessonsDirectory = path.join(process.cwd(), 'data', 'lessons')

export function getAllLessonsNames () {
  const allFileNames = fs.readdirSync(lessonsDirectory)
  const filteredFileNames = allFileNames.filter((fileName) => !fileName.startsWith('.'))
  const sortedFileNames = filteredFileNames.sort(
    (a, b) => a.localeCompare(b, undefined, {numeric: true})
  )

  return sortedFileNames
}

export async function getLessonData (allLessonsNames, id) {
    // Get the lesson's data
    const lessonFileName = allLessonsNames.find((fileName) => fileName.startsWith(`${id}-`))
    const lessonPath = path.join(process.cwd(), 'data', 'lessons', `${lessonFileName}`)
    const jsonData = fs.readFileSync(lessonPath)
    const lessonData = JSON.parse(jsonData)
    lessonData.fileName = lessonFileName

    return lessonData
}
