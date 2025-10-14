const Button = () => {
  {
    let isClicked = false;
    const handleClick = () => {
      const name = "Tausif";
      isClicked = true;
      return name;
    };
    return (
      <>
        <button onClick={handleClick}>Click</button>
        {isClicked && <p>{name}</p>}
      </>
    );
  }
};

export default Button;
