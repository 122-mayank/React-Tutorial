import  style from './Calculator.module.css';
function  Calculator(props){
 return <>
            {props.children}
            <h1 className={style['header']} >({props.operands})  We are making the calculator!!</h1>
            <input type="text"  className={style['input_box']}/>
            <div className={style['container']}>
                  <div className={style['box']}>+</div>
                  <div className={style['box']}>1</div>
                  <div className={style['box']}>2</div>
                  <div className={style['box']}>3</div>
                  <div className={style['box']}>-</div>
                  <div className={style['box']}>4</div>
                  <div className={style['box']}>5</div>
                  <div className={style['box']}>6</div>
                  <div className={style['box']}>%</div>
                  <div className={style['box']}>7</div>
                  <div className={style['box']}>8</div>
                  <div className={style['box']}>9</div>
                  <div className={style['box']}>/</div>
                  <div className={style['box']}>*</div>
                  <div className={style['box']}>=</div>
                  <div className={style['box']}>0</div>
            </div>

      </>
}

 export default Calculator;