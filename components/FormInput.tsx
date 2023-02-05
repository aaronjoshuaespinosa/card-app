import { FunctionComponent } from "react";

interface inputType {
    id: number,
    type: string,
    name: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput:FunctionComponent<inputType> = (props) => {
    const { id, type, name, onChange } = props
    return (
        <div key={id}>
            <p>{name}</p>
            <input type={`${type}`} name={`${name}`} className='border-light border-[1px] bg-dark rounded-[5px] p-[12px] w-full' onChange={onChange} />
        </div>
    );
}

export default FormInput;