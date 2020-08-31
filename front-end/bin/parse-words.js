/**
 * This script parses a CSV file with lessons and saves it to JSON files.
 * Each row in the CVS corresponds to only one Duolingo lesson. A few rows
 * make up a lesson.
 *
 * Why this script? I have a spreadsheet with all of the Chinese words from
 * Duolingo. To avoid convoluted logic or manual data entry of that data, this
 * script creates a JSON fiel per one duolingo lesson from the spreadsheet.
 * Next, the JSON files can be used to generate NextJS pages.
 */
const csvParser = require('csv-parser')
const fs = require('fs')
const path = require('path')

const destinationDirectory = path.join(process.cwd(), 'data', 'unprocessed')
const filePath = path.join(process.cwd(), 'words.csv')

let currentLesson = {
  title: null,
  vocabulary: [],
}

fs.createReadStream(filePath)
  .pipe(csvParser())
  .on('data', (row) => {
    // If row doesn't match the current lesson save the current lesson
    // And start a new lesson
    if (row.lesson != currentLesson.title && currentLesson.title != null) {
      const currentLessonDestination = path.join(
        destinationDirectory, `0-<${currentLesson.title}>.json`
      )

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
  })
  .on('end', () => {
    console.info('The End')
  })