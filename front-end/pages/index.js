import Layout from '../components/layout'
import { getAllLessonsNames } from '../lib/lessons'

import Button from 'react-bootstrap/Button'

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
      <article>
        <h1>Supplemental Practice</h1>
        <section>
          <p>To get the moust out of the Build a Sentence Exercises try to write each sentence by hand on paper. That way you will develop a better memory of the Chinese characters.</p>
        </section>
        <section>
          <h2>I. Build a Sentence Exercise</h2>
          <h3>prounound + 是 + noun</h3>
          <p>Practice a linking verb 是 (shì) with pronouns and nouns. Try to write each conbination of pronoun + noun by hand.</p>
          <p>Pronouns: <span>我</span> (wǒ), <span>你</span> (nǐ), <span>他</span> (tā), <span>她</span> (tā). Nouns: <span>老师</span> (lǎo shī), <span>学生</span> (xué sheng), <span>医生</span> (yī shēng)</p>
          <h4>Example:</h4>
          <p><span>我是老师.</span> <span>I am a teacher.</span></p>
        </section>
        <section>
          <h2>II. Build a Sentence Exercise</h2>
          <h3>name + 是 + noun</h3>
          <p>Practice a linking verb 是 (shì) with names and nouns. Try to write each conbination of name + noun by hand.</p>
          <p>Pronouns: <span>李华</span> (lǐ huá), <span>张明</span> (zhāng míng), <span>王明</span> (wáng míng). Nouns: <span>老师</span> (lǎo shī), <span>学生</span> (xué sheng), <span>医生</span> (yī shēng)</p>
          <h4>Example:</h4>
          <p><span>李华是老师.</span> <span>Li Hua is a teacher.</span></p>
        </section>
        <section>
          <h2>Time and Date</h2>
          <table>
            <thead>
              <tr>
                <th scope="col">Chinese</th>
                <th scope="col">Pinyin</th>
                <th scope="col">English</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-active">
                <td colSpan="3">
                天 - tiān - day
                </td>
              </tr>
              <tr className="table-active" key="昨天-zuótiān">
                <td key="昨天">昨天</td>
                <td key="zuótiān">zuó tiān</td>
                <td key="yesterday">yesterday</td>
              </tr>
              <tr className="table-active" key="今天-jīntiān">
                <td key="今天">今天</td>
                <td key="jīntiān">jīn tiān</td>
                <td key="today">today</td>
              </tr>
              <tr className="table-active" key="明天-míngtiān">
                <td key="明天">明天</td>
                <td key="míngtiān">míng tiān</td>
                <td key="tomorrow">tomorrow</td>
              </tr>
              <tr className="table-active">
                <td colSpan="3">
                星期 - xīng qī - week
                </td>
              </tr>
              <tr className="table-active" key="上个星期-shànggexīngqī">
                <td key="上个星期">上个星期</td>
                <td key="shàng ge xīng qī">shàng ge xīng qī</td>
                <td key="last week">last week</td>
              </tr>
              <tr className="table-active" key="这个星期-zhègexīngqī">
                <td key="这个星期">这个星期</td>
                <td key="zhè ge xīng qī">zhè ge xīng qī</td>
                <td key="this week">this week</td>
              </tr>
              <tr className="table-active" key="下个星期-xiàgexīngqī">
                <td key="下个星期">下个星期</td>
                <td key="xià ge xīng qī">xià ge xīng qī</td>
                <td key="next week">next week</td>
              </tr>
              <tr className="table-active">
                <td colSpan="3">
                  月 - yuè -month
                </td>
              </tr>
              <tr className="table-active" key="上个月-shànggeyuè">
                <td key="上个月">上个月</td>
                <td key="shàng ge yuè">shàng ge yuè</td>
                <td key="last month">last month</td>
              </tr>
              <tr className="table-active" key="这个月-zhègeyuè">
                <td key="这个月">这个月</td>
                <td key="zhè ge yuè">zhè ge yuè</td>
                <td key="this month">this month</td>
              </tr>
              <tr className="table-active" key="下个月-xiàgeyuè">
                <td key="下个月">下个月</td>
                <td key="xià ge yuè">xià ge yuè</td>
                <td key="next month">next month</td>
              </tr>
              <tr className="table-active">
                <td colSpan="3">
                  年 - nián -year
                </td>
              </tr>
              <tr className="table-active" key="去年-qùnián">
                <td key="去年">去年</td>
                <td key="qùnián">qù nián</td>
                <td key="last year">last year</td>
              </tr>
              <tr className="table-active" key="今年-jīnnián">
                <td key="今年">今年</td>
                <td key="jīnnián">jīn nián</td>
                <td key="this year">this year</td>
              </tr>
              <tr className="table-active" key="明年-míngnián">
                <td key="明年"></td>
                <td key="míngnián">míng nián</td>
                <td key="next year">next year</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </Layout>
  )
}





