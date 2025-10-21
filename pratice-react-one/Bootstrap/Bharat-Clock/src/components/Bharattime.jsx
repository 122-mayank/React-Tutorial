function Bharattime(){

    let date = new Date();

    return  <div>
          <h1>{date.toLocaleDateString()}</h1>
          <h1>{date.toLocaleTimeString()}</h1>
    </div>

}

export default Bharattime;