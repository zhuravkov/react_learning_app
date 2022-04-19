import styles from './FormControls.module.css'



// // оборачивает обычную textarea и накручивает ей условий
// export const TextArea = (props) => {
//     // проверка есть ли в META error и меняются стили в зависимости от этого

//     const hasError = props.meta.touched && props.meta.error

//     return (
//         <div className={styles.formControle + " " + (hasError ? styles.error : "") }>
//             <div>
//                 <textarea {...props.input} placeholder={props.placeholder} />
//             </div>

//             { hasError && <span>{props.meta.error}</span> }   

//         </div>
//     )
// }

// export const Input = ({input,meta,  ...props}) => {

//     const hasError = meta.touched && meta.error

//     return (
//         <div className={styles.formControle + " " + (hasError ? styles.error : "") }>
//             <div>
//                 <input {...input} {...props} />
//             </div>

//             { hasError && <span>{meta.error}</span> }   

//         </div>
//     )
// }

// Убираем дублирование кода обернув в ХОК

const Element = Element => ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error;
  
    return (
  
      <div className={ styles.formControle + " " + (hasError ? styles.error : "") }>
  
        <Element {...input} {...props} />
  
        { hasError && <span> { meta.error } </span> }
  
      </div>
  
    );
  
  };
  
  
 
export const TextArea = Element("textarea");
export const Input = Element("input"); 
