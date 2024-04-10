// export default function Button({ title, name }) {

export default function Button(props) {
  const { title, onClick, children } = props;

  console.log(children);

  return <button onClick={onClick}>{title || children}</button>;
}
