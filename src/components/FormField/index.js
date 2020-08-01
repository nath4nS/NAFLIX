import React from 'react';
import Proptypes from 'prop-types';

function FormField({
     label, type, name, value, onChange,
}) {
    const fieldId = `id_${name}`;

    return (
        <div>
            <label
                htmlFor={fieldId}
            >
            {label}
            :
                <input
                    id={fieldId}
                    type="text"
                    name="nome"
                    value={value}
                    onChange={onChange}
                />
                </label>
        </div>
    )
}

FormField.defaultProps = {
    //type: 'text',
};

FormField.propTypes = {
    label: Proptypes.string.isRequired,
    type: propTypes.string,
    //name,
    //value,
    //onChange,
};

export default FormField;