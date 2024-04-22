
import './Dialog.css';

export default function Dialog({ title, success, reject }) {
  return (
    <div className='dialog__backdrop'>
      <section className='dialog'>
        <h3>{title}</h3>

        <button onClick={success}>Okay</button>
        <button onClick={reject}>Cancel</button>
      </section>
    </div>
  );
}
