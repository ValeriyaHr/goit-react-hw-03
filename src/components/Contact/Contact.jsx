import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";


export default function Contact({ id, name, number, onDelete }) {
    
    return (
        <li className={css.list}>
            <div className={css.text}>
                <p className={css.textName}> <FaUser />{name} </p>
                <p  className={css.textNumber}><BsFillTelephoneFill />{number}</p>
            </div>
            <button className={css.button} onClick ={() => onDelete(id) }>Delate</button>
    </li>
    );
}