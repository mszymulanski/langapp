export default function Table (vocabulary) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Word</th>
          <th scope="col">Pinyin</th>
          <th scope="col">English</th>
        </tr>
      </thead>
      <tbody>
        {vocabulary.map((v) => (
          <tr className="table-active" key={`${v.chinese}-${v.pinyin}`}>
            <td key={v.chinese}>{v.chinese}</td>
            <td key={v.pinyin}>{v.pinyin}</td>
            <td key={v.english}>{v.english}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}