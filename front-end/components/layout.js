import Link from 'next/link'
import Head from 'next/head'

// import 'bootstrap/dist/css/bootstrap.min.css'

export default function Layout({ children, home, allLessonsNames }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://bootswatch.com/4/slate/bootstrap.min.css" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" charset="utf-8"/> {/* Tell IE to use latest rendering engine */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> {/* Set the page width to the device width  */}
      </Head>
      <nav role="navigation" className="left split nav">
        <ul className="navbar-nav mr-auto">
          {allLessonsNames.map((lessonFileName) => {
            // Here we should parse the lesson id and lesson title from the file name
            // and use them to create href/as and display lesson title to the user
            const id = lessonFileName.match(/^[0-9]*/)[0]
            const title = lessonFileName.match(/<[a-zA-Z0-9 ]*>/)[0].replace('<', '').replace('>', '')

            return (
              <li className="nav-item" key={`lesson-${id}`}>
                <Link href={`/lessons/[id]`} as={`/lessons/${id}`}>
                  <a className="active">
                    {`${id} ${title}`}
                  </a>
                </Link>
              </li>
            )
          })}
          {home ? (<></>) : (<li className="link-home-page"><Link href="/"><a>Go Home</a></Link></li>)}
        </ul>
      </nav>
      <main role="main" className="right split jumbotron">{children}</main>
      
    </div>
  )
}