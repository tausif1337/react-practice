const Button = () => {
 

  const handleClick = () => {
    const name = "tausif";
    document.getElementById("nameTag").style.display = "block";
    return name;
  };

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <p id="nameTag" style={{ display: "none" }}>{handleClick()}</p>
    </>
  );
};

export default Button;
