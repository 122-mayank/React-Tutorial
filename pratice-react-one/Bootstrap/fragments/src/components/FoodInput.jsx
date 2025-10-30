import style from "./FoodInput.module.css";
const FoodInput = ({handleChange}) =>{

      return <input type="text"
       placeholder="Enter the food items here"
       className={style.foodInput}
       onKeyDown={handleChange}
      />

}

export default FoodInput;