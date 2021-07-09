import Board from '../components/Board';
import style from '../styles/board.module.css';

export default function Home() {
  return (
    <>
      <Board table={style.table} block={style.block} />
    </>
  );
}
