import  styles from "./Item.module.css";

const Item = ({ foodItem }) => {
   
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
    } 

    return (
      <li  className={` list-group-item`}>
        <span className={styles["kg-span"]}>{foodItem}</span>
        <button className={`${styles.button} btn btn-info`}
          onClick={(event) => handleBuyButtonClicked(event)}
          
        >buy</button>
      </li>
    );
 

}

export default Item;