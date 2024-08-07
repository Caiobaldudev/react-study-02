import React from "react";
import UReftwo from "./UReftwo";

const URef = () => {
  const video = React.useRef();
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState("");

  const inputElement = React.useRef()

  function handleClick() {
    setComentarios([...comentarios, input])
    setInput('')
    inputElement.current.focus()
  }

  React.useEffect(() => {
    console.log(video.current.currentTime);
  });

  return (
    <div>
      <video ref={video} />
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
      <br />
      <UReftwo/>
    </div>
  );
};

export default URef;
