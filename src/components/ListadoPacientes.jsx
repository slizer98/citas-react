import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente}) => {

  return (
    <div className="sm:w-full md:w-3/5 m-3 md:h-screen sm:overflow-y-scroll">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2> 
            <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {''}
              <span className="text-indigo-600 font-bold ">pacientes y Citas</span>
            </p>
            { pacientes.map( paciente => (
              <Paciente 
                key={paciente.id} 
                paciente={paciente}
                setPaciente={setPaciente}
                />
              ))}
          </>

        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay paceintes</h2> 
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando pacientes {''}
              <span className="text-indigo-600 font-bold ">y aparecerán en este lugar</span>
            </p>
          </>
        )}
    </div>
  )
}

export default ListadoPacientes
