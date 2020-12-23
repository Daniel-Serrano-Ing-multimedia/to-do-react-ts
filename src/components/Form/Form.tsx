import React ,{ useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { FormGroup, InputGroup, TextArea, Button, ControlGroup } from '@blueprintjs/core';
import { task } from '../../interfaces/task';
import moment from 'moment';
import { DateInput } from '@blueprintjs/datetime';
import './Form.scss';

type FormProps = {
    /** array of objects! (common) */
    listaTasks      : task[];
    setListaTasks   : React.Dispatch<React.SetStateAction<any[]>>;
    setTask2List    : (task:task) => void; 
}
const Form = ( { listaTasks, setListaTasks, setTask2List }: FormProps ) => {
    /*  Estado del componente  */
    const [ dataTask, setDataTask ] = useState<task>({
        name        : "",
        description : "",
        initDate    : null,
        finishDate  : null
    });
    
    const handleOnChangeTxt = ( e: FormEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ):void => {
        
        setDataTask({
                ...dataTask,
               [ e.currentTarget.name]: e.currentTarget.value
        });  
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setTask2List(dataTask);
    }
    return (
        <form
            onSubmit = { handleSubmit }
        >
            <ControlGroup
                className="task-form"
                vertical={true}
            >
                <h2>Agrega una nueva tarea</h2>
                <FormGroup
                    label="Nombre de Tarea"
                    labelFor="text-input"
                >
                    <InputGroup 
                        id="text-input" 
                        name = 'name'
                        placeholder="Placeholder text" 
                        value={ dataTask.name }
                        onChange = { handleOnChangeTxt }
                    />
                </FormGroup>

                <FormGroup
                    helperText="Helper text with details..."
                    label="Descripcion"
                    labelFor="text-input"
                    labelInfo="(required)"
                >
                    <TextArea
                        growVertically={true}
                        name = 'description'
                        large={ false }
                        //intent={Intent.PRIMARY}
                        value={ dataTask.description }
                        onChange = { handleOnChangeTxt }
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

            </ControlGroup>
            <Button
                text="Añadir Tarea"
                type="submit"
                fill = { true }
            />
        </form>
    );
}

export default Form;