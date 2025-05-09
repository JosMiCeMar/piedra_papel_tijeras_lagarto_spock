import { Link } from "@inertiajs/react";

export function InicioNoLog() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-lg text-white">Bienvenido a PiPaTiLaSp</h1>
            <article>
                <p className="p-2">
                    Prepárate para sumergirte en el emocionante mundo de este
                    clásico juego, con un toque moderno y una comunidad vibrante
                    de jugadores como tú. En nuestra web, no solo podrás
                    disfrutar del desafío de enfrentarte a otros jugadores en
                    partidas rápidas y emocionantes, sino que también tendrás la
                    oportunidad de registrar tus victorias y ascender en nuestro
                    ranking de jugadores destacados.
                </p>
                <p className="p-2">
                    ¿Eres un maestro del engaño con la tijera? ¿O quizás
                    prefieres la lógica aplastante de la piedra? Tal vez te
                    sientas más en sintonía con la astucia del lagarto o la
                    sabiduría de Spock. Sea cual sea tu estilo de juego, aquí
                    encontrarás desafíos a la altura de tus habilidades.
                </p>
                <p className="p-2">
                    <Link
                        href={route("register")}
                        className="ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] underline"
                    >
                        Regístrate
                    </Link>{" "}
                    ahora para unirte a la diversión, competir con jugadores de
                    todo el mundo y demostrar tu destreza en el arte del piedra,
                    papel, tijeras, lagarto, Spock. ¡Que comience el juego!
                </p>
            </article>
        </div>
    );
}
