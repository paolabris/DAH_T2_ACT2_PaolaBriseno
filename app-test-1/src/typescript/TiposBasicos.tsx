import React from "react";
export const TiposBasicos = () => {
  let FicIdNombre: string | number = "Frank";
  FicIdNombre = 706;
  const FicNombre: string = "Francisco";
  const FicApellidos: string = "Ibarra Carlos";
  const FicNumControl: number = 706;
  const FicNumControl2 = 1074;
  const FicFechaReg: Date = new Date();
  let FicExperiencia = 20;
  let FicActivo: boolean = true;
  FicExperiencia = 25;
  let FicPasatiempos: string[] = ['futbol', 'squash', 'leer', 'series y peliculas'];
  let FicLibros=[];
  FicLibros.push(706);
  FicLibros.push(true);
  FicLibros.push('El principito');

  return (
    <>
      <h3>Tipos Basicos</h3>
      Alias: {FicIdNombre},<br></br>
      Nombre:{FicNombre},<br></br>
      Apellidos:{FicApellidos},<br></br>
      NO. COntrol1 {FicNumControl},<br></br>
      no. Control2{FicNumControl2},<br></br>
      Fecha de registro: {FicFechaReg.toString()},<br></br>
      Años de experiencia{FicExperiencia},<br></br>
     Estatus:  {FicActivo ? 'activo': 'no acetivo'},<br></br>
     Libros: {FicLibros[0]}, 
                  {(FicLibros[1]) ? 'Activo' : 'No Activo'}, 
                  {FicLibros[2]}
    </>
  );
};
