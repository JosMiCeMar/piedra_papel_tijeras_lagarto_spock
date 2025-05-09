export function InicioLog({ user }) {
    return (
        <>
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Bienvenid@ {user.name}
            </h2>
            <p className="text-gray-200 font-semibold m-3">¡Nos alegra verte por aquí!</p>
            <div>
              <p>Comprueba si algún usuario te ha retado y defiende tu posición en el ranking.</p>
              <p>¡Suerte!</p>
            </div>
        </>
    );
}
