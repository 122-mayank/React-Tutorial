import style from './Item.module.css';

const Item = ({fooditem , bought, handleButton})=>{



  return (
    <li  className= {`${style['kg-item']} list-group-item  ${bought && "active"}`}><span className={style['kg-span']}>{fooditem}</span>
      <button className={style.button}
        onClick={handleButton} >Buy</button>
    </li>

  );

};

export default Item