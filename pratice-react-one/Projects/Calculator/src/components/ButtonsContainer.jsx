import style from "./ButtonsContainer.module.css";
function ButtonsContainer({onButtonClick}){

   const buttonNames = [
  "C",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "+",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",

   ];


     return(
        <>
          <div className={style.container}>
                {buttonNames.map((buttonName)=>(
                  <button className={style.box} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>
                ))}
            </div>
        </>
     );
}
export default ButtonsContainer;