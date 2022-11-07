const Box = () => {
    return (
        <div className="box" onClick={handleClick} style={{height:"300px", width: "300px", border:"3px solid black", backgroundColor:color[colorIndex]}}>
        <p style={{textAlign: "center", marginTop: "150px"}}>
          {color[colorIndex]}
        </p>
      </div>
    )
}
export default Box