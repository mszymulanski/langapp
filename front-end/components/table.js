export default function Table (vocabulary) {
  return (
    <table>
      <thead>
        <tr>
          <th>Word</th>
          <th>Pinyin</th>
          <th>English</th>
        </tr>
      </thead>
      <tbody>
        {vocabulary.map((v) => (
          <tr key={`${v.chinese}-${v.pinyin}`}>
            <td key={v.chinese}>{v.chinese}</td>
            <td key={v.pinyin}>{v.pinyin}</td>
            <td key={v.english}>{v.english}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}