// importar sweetalert2
import Swal from 'sweetalert2';
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas, id} = paciente;
  const handleEliminar = () => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Un paciente eliminado no se puede recuperar",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado!',
                'El paciente ha sido eliminado.',
                'success'
            )
            eliminarPaciente(id);
        }
    }).catch(error => {
        console.log(error);
    });
    
  };
  return (
    <div className="mt-3 bg-white shadow-md px-5 py-10 rounded-xl"> 
        <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:{' '}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{' '}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{' '}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta:{' '}
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{' '}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-around pt-4">
            <button 
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={() => setPaciente(paciente)}
            >Editar</button>

            <button 
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={handleEliminar}
            >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente
