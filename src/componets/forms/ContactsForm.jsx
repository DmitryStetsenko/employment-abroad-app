import { useForm } from "react-hook-form";

const ContactsForm = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: 'onChange',
    });

    const submit = data => {
        console.log(data);
    }

    return (
        <form className="form form_contacts">
            <label className="form-item">
                <span className="form-item__text">email</span>
                <input type="text" />
                <span className="form-item__error-area"></span>
            </label>
        </form>
    )
}

export default ContactsForm;