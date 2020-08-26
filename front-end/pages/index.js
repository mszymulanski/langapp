import Layout from '../components/layout'
import { getAllLessonsNames } from '../lib/lessons'

export async function getStaticProps () {
  // Get the data file names so we can pass it on to Layout
  const allLessonsNames = getAllLessonsNames()

  return {
    props: {
      allLessonsNames,
    },
  }
}

export default function Home ({ allLessonsNames }) {
  return (
    <Layout home allLessonsNames={allLessonsNames}>
      <section>
        <p>Hello Again!</p>
      </section>
    </Layout>
  )
}