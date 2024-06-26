import { Label, Radio } from 'flowbite-react'
import React from 'react'

const DepartmentItem = ({ id, name, onChange }) => {
    return (
        <div>
            <div className="flex items-center gap-2">
                <Radio
                    id={name}
                    name="departmentID"
                    value={id}
                    onChange={onChange}
                />
                <Label htmlFor={name}>{name}</Label>
            </div>
        </div>
    )
}

export default DepartmentItem