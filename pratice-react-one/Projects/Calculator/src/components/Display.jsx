import style from "./Display.module.css";
function Display(props){

     return(
         <>
           <input type="text"  className={style.input_box}  value={props.calval} readOnly/>
         </>
     );
}

export default Display;