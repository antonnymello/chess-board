export default function Board(props) {
  const multiplier = [...Array(4)];
  const blackHex = '#000';
  const whiteHex = '#fff';

  const loop = (firstColor, secondColor) => {
    return multiplier.map(() => (
      <>
        {firstColor}
        {secondColor}
      </>
    ));
  };

  const blockDiv = (color) => (
    <div className={props.block} style={{ backgroundColor: color }} />
  );

  const line = (invert) =>
    invert
      ? loop(blockDiv(blackHex), blockDiv(whiteHex))
      : loop(blockDiv(whiteHex), blockDiv(blackHex));

  return (
    <div className={props.table}>
      {multiplier.map(() => (
        <>
          <div>{line()}</div>
          <div>{line(true)}</div>
        </>
      ))}
    </div>
  );
}
