import React from 'react'
import { FormGroup, InputGroup, TextArea } from '@blueprintjs/core';
const Form = () => {
    return(
        <div className = "task-form">
            <h2>Agrega una nueva tarea</h2>
            <FormGroup
                label="Nombre de Tarea"
                labelFor="text-input"
            >
                <InputGroup id="text-input" placeholder="Placeholder text" />
            </FormGroup>

            <FormGroup
                helperText="Helper text with details..."
                label="Descripcion"
                labelFor="text-input"
                labelInfo="(required)"
            >
                <TextArea
                    growVertically={ true }
                    large={ true }
                    //intent={Intent.PRIMARY}
                    //onChange={this.handleChange}
                    //value={this.state.value}
                />
            </FormGroup>

            <FormGroup
                helperText="Helper text with details..."
                label="Nombre de Tarea"
                labelFor="text-input"
                labelInfo="(required)"
            >
                <InputGroup id="text-input" placeholder="Placeholder text" />
            </FormGroup>
        </div>
    );
}

export default Form;