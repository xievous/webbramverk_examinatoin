export const Top = (props) => {
  const { top } = props;

  function displayTop() {
    if (top === "home") {
      return (
        <div>
          <h1>E WALLET</h1>
        </div>
      );
    } else if (top === "addcard") {
      return (
        <div>
          <h1>ADD NEW CARD</h1>
        </div>
      );
    }
  }

  return (
    <>
      <section>{displayTop()}</section>
    </>
  );
};
