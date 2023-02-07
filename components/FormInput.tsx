import { FunctionComponent } from "react";

interface inputType {
    id: number,
    type: string,
    name: string,
    title: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput:FunctionComponent<inputType> = (props) => {
    const { id, type, name, title, onChange } = props
    return (
        <div key={id} className="relative">
            <p className="absolute top-[-0.8rem] left-[6px] bg-dark px-1 font-bold">{name}</p>
            <input type={`${type}`} name={`${name}`} title={`${title}`} className='border-light border-[1px] bg-dark autofill:!bg-dark rounded-[5px] p-[12px] w-full' onChange={onChange} />
            <p className="text-xs text-red-500 hidden">Already taken.</p>
        </div>
    );
}

export default FormInput;