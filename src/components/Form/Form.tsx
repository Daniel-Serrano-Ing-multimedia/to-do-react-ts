import React ,{ useState, useEffect } from 'react'
import { FormGroup, InputGroup, TextArea } from '@blueprintjs/core';
import { DateInput } from '@blueprintjs/datetime';
import './Form.scss';

type FormProps = {
    /** array of objects! (common) */
  listaTasks: {
    name: String,
    description: String,
    initDate: Date,
    finishDate: Date
  }[];
}
interface formData {
    name: string,
    description: string,
    initDate: Date,
    finishDate: Date
}
const Form = ( { listaTasks }: FormProps ) => {

    const [dataTask, setDataTask] = useState <formData | null> (null);
    
    const handleOnChange = ( e: React.FormEvent<HTMLInputElement> ):void => {
        console.log( "cambiando.." );
    }
    return(
        <div className = "task-form">
            <h2>Agrega una nueva tarea</h2>
            <FormGroup
                label="Nombre de Tarea"
                labelFor="text-input"
            >
                <InputGroup 
                    id="text-input" 
                    placeholder="Placeholder text" 
                    value = { dataTask.name }
                />
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
                    //{value}={this.state.value}
                />
            </FormGroup>

            <FormGroup
                helperText="dia en que debes iniciar la tarea"
                label="fecha de nicio"
            >
                <DateInput
                    formatDate={date => date.toLocaleString()}
                    //onChange={this.handleDateChange}
                    parseDate={str => new Date(str)}
                    defaultValue={new Date()}
                    placeholder={"M/D/YYYY"}
                    //value={this.state.date}
                />
            </FormGroup>

            <FormGroup
                helperText="dia en que debes terminar la tarea"
                label="fecha de finalización"
            >
                <DateInput
                    formatDate={date => date.toLocaleString()}
                    //onChange={this.handleDateChange}
                    parseDate={str => new Date(str)}
                    placeholder={"M/D/YYYY"}
                    //value={this.state.date}
                />
            </FormGroup>
        </div>
    );
}

export default Form;