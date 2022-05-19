import React, { useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

type Props = {
    showPopup : boolean
}

export default function SignUpPopup({showPopup}: Props) {

    let [isOpen, setIsOpen] = useState(false)

    useEffect (() => {
        showPopup && openModal();
    }, [showPopup])

    const handleOnSubmit = () => {

    };
    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }

    return (
        <div>
            <Transition appear show={isOpen}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto mx-8">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-800 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        className="text-xl font-medium my-2 text-emerald-400 text-center">
                                        Your message has been sent !
                                    </Dialog.Title>
                                    <div className="block bg-gradient-to-r from-transparent via-emerald-300 to-transparent w-full bg-[length:80%_1px] bg-no-repeat bg-center pb-[6px]" />

                                    <div className="mt-2">
                                        <p className="text-md text-gray-400 text-center my-6">
                                            I will return your message at my earliest convenience.
                                            <br />
                                            Thank you!
                                        </p>
                                    </div>
                                    <div id='bar' className="bg-emerald-700 h-3 fixed bottom-0 left-0" style={{ width: "0%" }}></div>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="absolute right-0 top-0 px-2 py-2 text-emerald-500 hover:text-emerald-800"
                                            onClick={closeModal}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}