function List(props) {
  return (
    <ul className="list-group">
      {props.projects.map((item) => {
        return (
          <li className="list-group-item" key={item.id}>
            {item.name} <a href={item.url}>{item.url}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
