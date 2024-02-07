import { FaTrash } from "react-icons/fa6";

export const Order = ({ item, onDelete }) => {
  return (
    <div className='item'>
      <img src={"./images/" + item.img} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.price}₽</p>
      <FaTrash className='delete-icon' onClick={() => onDelete(item.id)} />
    </div>
  );
};
