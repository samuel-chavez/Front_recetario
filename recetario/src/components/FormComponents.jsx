export function Input ({ CName, children, type, value, label, cambiarDatos, accept }) {
    return (
        <div className={CName}>
            <label htmlFor={type}>
                { label } <br />
                <input 
                    type={type}
                    name={type}
                    value={value}
                    accept={accept}
                    onChange={cambiarDatos}
                     />
                {children}
            </label>
        </div>
    )
}

export function Submit ({ CName, type, value, cambiarDatos }) {
    return (
        <div className={CName}>
            <label 
            htmlFor={type} 
            value={value}
            className="form-button"
            onChange={cambiarDatos} />
        </div>
    )
}

export function TextArea ({ CName, type, value, label, cambiarDatos }) {
    return (
        <div className={CName}>
            <label htmlFor={type}>
                {label} <br />
                <textarea 
                    name={type}
                    cols="50" 
                    rows="5"
                    value={value}
                    onChange={cambiarDatos} />
                </label>
        </div>
    )
}

export function Select ({ CName, children, type, label, value, cambiarDatos }) {
    return (
        <div className={CName}>
            <label htmlFor={type}>
                {label}
                <select 
                    name={type} 
                    value={value} 
                    onChange={cambiarDatos} >
                    {children}
                </select>
            </label>
        </div>
    )
}

export function Form ({ CName, children, submit }) {
    return (
        <form className={CName} onSubmit={submit} >
            {children}
        </form>
    )
}