function List({ list }: any) {
  console.log("List render call");
  return (
    <table>
      <tbody>
        {list.map(({ id, name, code, tag }: any) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{code}</td>
            <td>{tag}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
