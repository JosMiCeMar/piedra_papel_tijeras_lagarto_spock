import GamesLayout from "@/Layouts/GamesLayout";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Select from "react-select";
import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import SelectHand from "@/Components/SelectHand";

export default function Recibidas({ auth, partidas, cantidad }) {
    const { data, setData, post } = useForm({
        id: "",
        mano: ""
    });

    const [selectedGame, setSelectedGame] = useState(null);
    const [selectedHand, setSelectedHand] = useState(null);

    

    const gameList = partidas.map((game) => ({
        value: game["id"],
        label: "De: "+ game["atac"]+" - Fecha: "+game["fecha"]
    }));


    const handleGameChange = (selectedOption) => {
        setSelectedGame(selectedOption);
    };

    const handleHandChange = (selectedOption) => {
        setSelectedHand(selectedOption);
    };

    const isButtonEnabled = selectedGame && selectedHand;

    const submit = (e) => {
        e.preventDefault();
        post(route("juego.recibidas"));
    };

    return (
        <GamesLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl dark:text-gray-200 leading-tight">
                    Partidas Recibidas
                </h2>
            }
        >
            <Head title="Crear Partida" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5">
                    <p className="font-semibold text-bg text-gray-200">
                       {auth.user.name}, tienes {cantidad} partidas pendientes.
                    </p>

                    <form onSubmit={submit}>
                        <div className="py-2 w-80">
                            <InputLabel
                                htmlFor="partida"
                                value={"Selecciona la partida:"}
                            />
                            <Select
                                id="partida"
                                name="id"
                                options={gameList}
                                onChange={(selectedOption, event) => {
                                    handleGameChange(selectedOption);
                                    setData("id", selectedOption.value);
                                }}
                                isSearchable={false}
                            />
                        </div>
                        <div className="py-2 w-80">
                            {selectedGame && (
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
                                ¡Responder!
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GamesLayout>
    );
}