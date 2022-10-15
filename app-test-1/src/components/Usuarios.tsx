import { useEffect, useRef, useState } from "react";
import { Usuario } from "../interfaces/reqResp";
/* import { reqRespApi } from "../api/reqRes";
import { ReqRespUsuarioListado, Usuario } from "../interfaces/reqResp"; */
import { useUsuarios } from "./hooks/useUsuarios";

export const Usuarios = () => {
  
  // const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const { usuarios, ficFnPaginaSiguiente, ficFnPaginaAnterior} = useUsuarios();

/*   const ficFnCargaUsuarios = async () => {
    const ficResponse = await
    //FIC: llamado de la API
    reqRespApi.get<ReqRespUsuarioListado>('/users', {
        params: {
            page: ficRefPage.current
        }
    })
    .then(resp=> {
        //console.log(resp);   
        //console.log(resp.data);
        //console.log(resp.data.data);
        //console.log(resp.data.data[0].first_name);
        //console.log(resp.data.data);
        if ( resp.data.data.length > 0 ) {
            setUsuarios(resp.data.data);
            ficRefPage.current ++;
        }
        else {
            alert('No hay mas registros');
        }
    })
    .catch(err => console.log(err))
} */
// const ficRefPage=useRef(0);

/*   useEffect(() => {
    ficFnCargaUsuarios();
  }, []); */

  const renderItem = (usuario: Usuario) => {
    return (
      <tr key={usuario.id.toString()}>
        <td>
          <img
            src={usuario.avatar}
            alt={usuario.first_name}
            style={{
              width: 50,
              borderRadius: 100,
            }}
          ></img>
        </td>
        <td>
          {usuario.first_name} {usuario.last_name}
        </td>
        <td>{usuario.email}</td>
              </tr>
      
    );
  };
  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <tbody>
          {usuarios.map((FicArgUsuario) => renderItem(FicArgUsuario))}
        </tbody>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
      </table>
      <button
    className="btn btn-primary"
    onClick= { ficFnPaginaAnterior }
    >
    Anterior       
</button>
&nbsp;           
<button
    className="btn btn-primary"
    onClick= { ficFnPaginaSiguiente }
    >
    Siguiente       
</button>
    </>
  );
};
