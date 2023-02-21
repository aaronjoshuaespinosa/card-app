import { FunctionComponent } from "react";

interface inputType {
    id: number,
    type: string,
    name: string,
    label: string,
    title: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput:FunctionComponent<inputType> = (props) => {
    const { id, type, name, label, title, onChange } = props
    return (
        <div key={id} className="relative">
            <p className="absolute top-[-0.6rem] left-[6px] bg-dark px-1 font-bold text-sm">{label}</p>
            <input type={`${type}`} name={`${name}`} title={`${title}`} className='border-secondary border-[1px] bg-dark autofill:!bg-dark rounded-[5px] p-[12px] w-full' onChange={onChange} />
            <p className="text-xs text-red-500 hidden">Already taken.</p>
        </div>
    );
}

export default FormInput;