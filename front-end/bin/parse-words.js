const csvParser = require('csv-parser')
const fs = require('fs')
const path = require('path')

const destinationDirectory = path.join(process.cwd(), 'data', 'unprocessed')
const filePath = path.join(process.cwd(), 'words.csv')
console.log('filePath: ', filePath)
// const allWords = fs.readFileSync(filePath, 'utf8')
let currentLesson = {
  title: null,
  vocabulary: [],
}

let count = 0
fs.createReadStream(filePath)
  .pipe(csvParser())
  .on('data', (row) => {
    // console.log(row)
    // If row doesn't match the current lesson save the current lesson
    // And start a new lesson
    if (row.lesson != currentLesson.title && currentLesson.title != null) {
      const currentLessonDestination = path.join(
        destinationDirectory, `0-<${currentLesson.title}>.json`
      )
      console.log('should write: ', currentLessonDestination)

      fs.writeFileSync(
        currentLessonDestination,
        JSON.stringify(currentLesson, null, 2),
        'utf8'
      )
    }

    if (row.lesson != currentLesson.title) {
      currentLesson = {
        title: row.lesson,
        vocabulary: [],
        lessonNumber: null
      }
    }
    currentLesson.vocabulary.push({
        chinese: row.chinese,
        pinyin: row.pinyin,
        english: row.english,
      }
    )
    // console.log(currentLesson)
    // if (count == 15) process.exit()
    // else count++
  })
  .on('end', () => {
    console.log('The End')
  })