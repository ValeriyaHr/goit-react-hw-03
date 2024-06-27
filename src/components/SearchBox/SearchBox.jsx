import { useId } from 'react';
import css from "./SearchBox.module.css";


export default function SearchBox({ search, onSearchChange }) {

    const searchFieldId = useId();
    
    return (
        <div className={css.container}>
            <label htmlFor={searchFieldId} className={css.text}>Find contacts by name</label>
            <input className={css.input}
                id = {searchFieldId}
                type="text"
                value={search}
                onChange={onSearchChange}/>
        </div> 
);
}