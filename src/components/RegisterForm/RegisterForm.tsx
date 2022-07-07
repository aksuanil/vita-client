import { devNull } from 'os';
import React, { useState } from 'react'
import Notification from '../Elements/Notification/Notification';
import Form from '../Form/Form';
// import SignUpPopup from '../components/SignUpPopup';
// import { useAuth } from '../context/AuthContext';
import { RegisterCredentials } from '../../service/auth/types'
import { registerWithEmailAndPassword } from '../../service/auth/auth';
type Props = {}

export default function RegisterForm({ }: Props) {
    // const { signupSubmit } = useAuth();
    const [loader, setLoader] = useState(false);
    const [open, setOpen] = useState(false);
    const [header, setHeader] = useState("");
    const [text, setText] = useState("");
    const [status, setStatus] = useState(0);
    const [barWidth, setBarWidth] = useState(0);

    const onPopupOpen = () => {
        setOpen(true);
    };
    const onPopupClose = () => {
        setOpen(false);
    };

    function handleSubmit(event: any) {
        onPopupOpen();
        setLoader(true);
        event.preventDefault();
        const formData = new FormData(event.target);
        let object: any = {};
        formData.forEach((value, key) => object[key] = value);
        registerWithEmailAndPassword(object).then((response) => {
            setLoader(false);
            setHeader(response.data);
            setText(response.data.message);
            setStatus(response.status);
        }).catch((err) => {
            setLoader(false);
            setHeader(err.response.data.message);
            setText(err.response.data.message);
            setStatus(err.status);
        });
    }
    return (
        <>
            <Form handleSubmit={handleSubmit} />
            <Notification isOpen={open} isLoading={loader} headerValue={header} textValue={text} onClose={onPopupClose} />
        </>
    );
}