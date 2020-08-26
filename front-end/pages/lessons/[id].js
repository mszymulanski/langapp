import Layout from '../../components/layout'
import Head from 'next/head'
import Table from '../../components/table'
import { getAllLessonsNames, getLessonData } from '../../lib/lessons'

// getStaticPaths is important for gettign all of the possible paths for this template 
export async function getStaticPaths () {
  const allLessonNames = getAllLessonsNames()

  return {
    paths: allLessonNames.map((lessonName) => ({
      params: {
        id: lessonName.match(/^[0-9]*/)[0],
      }
    })),
    fallback: false,
  }
}

// getStaticProps is responsible for fetching all the data that will be passed
// down to the component
export async function getStaticProps (input) {
  const allLessonsNames = getAllLessonsNames()
  const lessonData = await getLessonData(allLessonsNames, input.params.id)

  return {
    props: {
      lessonData,
      allLessonsNames,
    },
  }
}

export default function Lesson (params) {
  return (
    <Layout home={false} allLessonsNames={params.allLessonsNames}>
      <Head>
        <title>{params.lessonData.title}</title>
      </Head>
      <article>
        <h2>{params.lessonData.title}</h2>
        <h3>Lesson Number {params.lessonData.lessonNumber}</h3>
        <section>
          {Table(params.lessonData.vocabulary)}
        </section>
      </article>
    </Layout>
  )
}