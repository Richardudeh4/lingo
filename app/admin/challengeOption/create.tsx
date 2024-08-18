import { BooleanInput, Create, Datagrid, List, NumberInput, ReferenceInput, required, SelectInput, SimpleForm, TextField, TextInput } from "react-admin"

export const ChallengeOptionCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="title" validate={[required()]} label="Text"/>
                <BooleanInput source="correct" label="Correct option"/>
            <ReferenceInput source="challengeId" reference="challenges"/>
            <TextInput source="imageSrc"  label="Image URL"/>
            <TextInput source="audioSrc" label="Audio URL"/>
            </SimpleForm>
        </Create>
    )
}