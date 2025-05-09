import GamesLayout from "@/Layouts/GamesLayout";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Select from "react-select";
import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import SelectHand from "@/Components/SelectHand";

export default function Crear({ auth, users }) {
    const { data, setData, post } = useForm({
        jugador1: auth.user.id,
        jugador2: "",
        mano: "",
    });

    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedHand, setSelectedHand] = useState(null);

    const { props } = usePage();

    const userList = users.map((user) => ({
        value: user.id,
        label: user.name,
    }));


    const handleUserChange = (selectedOption) => {
        setSelectedUser(selectedOption);
    };

    const handleHandChange = (selectedOption) => {
        setSelectedHand(selectedOption);
    };

    const isButtonEnabled = selectedUser && selectedHand;

    const submit = (e) => {
        e.preventDefault();
        post(route("juego.crear"));
    };

    return (
        <GamesLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl dark:text-gray-200 leading-tight">
                    Crear Partida
                </h2>
            }
        >
            <Head title="Crear Partida" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5">
                    <p className="font-semibold text-bg text-gray-200">
                        Selecciona al jugador, tu mano y envía el desafío
                    </p>

                    <form onSubmit={submit}>
                        <div className="py-2 w-80">
                            <InputLabel
                                htmlFor="jugador"
                                value={"Selecciona al jugador:"}
                            />
                            <Select
                                id="jugador"
                                name="jugador2"
                                options={userList}
                                onChange={(selectedOption, event) => {
                                    handleUserChange(selectedOption);
                                    setData("jugador2", selectedOption.value);
                                }}
                                isSearchable={false}
                            />
                        </div>
                        <div className="py-2 w-80">
                            {selectedUser && (
                                <>
                                    <InputLabel
                                        htmlFor="mano"
                                        value={"Selecciona la mano:"}
                                    />
                                    <SelectHand
                                        id="mano"
                                        name="mano"
                                        onChange={(selectedOption, event) => {
                                            handleHandChange(selectedOption);
                                            setData(
                                                "mano",
                                                selectedOption.value
                                            );
                                        }}
                                        isSearchable={false} 
                                    />
                                </>
                            )}
                        </div>
                        <div className="py-2">
                            <PrimaryButton disabled={!isButtonEnabled}>
                                ¡Desafiar!
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GamesLayout>
    );
}
