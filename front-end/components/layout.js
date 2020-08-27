import Link from 'next/link'

export default function Layout({ children, home, allLessonsNames }) {
  return (
    <div>
      <nav className="left split">
        <ul>
          {allLessonsNames.map((lessonFileName) => {
            // Here we should parse the lesson id and lesson title from the file name
            // and use them to create href/as and display lesson title to the user
            const id = lessonFileName.match(/^[0-9]*/)[0]
            const title = lessonFileName.match(/<[a-zA-Z0-9 ]*>/)[0].replace('<', '').replace('>', '')

            return (
              <li>
                <Link href={`/lessons/[id]`} as={`/lessons/${id}`}>
                  <a>
                    {`${id} ${title}`}
                  </a>
                </Link>
              </li>
            )
          })}
          {home ? (<></>) : (<li className="link-home-page"><Link href="/"><a>Go Home</a></Link></li>)}
        </ul>
      </nav>
      <main className="right split">{children}</main>
      
    </div>
  )
}