import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../../api/reqRes";
import { ReqRespUsuarioListado, Usuario } from "../../interfaces/reqResp";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const ficRefPage = useRef(0);

  useEffect(() => {
    //FIC: llamar función de carga de usuarios.
    ficFnCargaUsuarios();
  }, []);

  //funciones
  const ficFnPaginaSiguiente = () => {
    ficRefPage.current ++;
    ficFnCargaUsuarios(); 
  };
  const ficFnPaginaAnterior = () => {
    if ( ficRefPage.current > 1 ){
        ficRefPage.current --;
        ficFnCargaUsuarios();
    } 
  };

  const ficFnCargaUsuarios = async () => {
   // const ficResponse = await //FIC: llamado de la API
    reqRespApi
      .get<ReqRespUsuarioListado>("/users", {
        params: {
          page: ficRefPage.current,
        },
      })
      .then((resp) => {
        //console.log(resp);
        //console.log(resp.data);
        //console.log(resp.data.data);
        //console.log(resp.data.data[0].first_name);
        //console.log(resp.data.data);
        if (resp.data.data.length > 0) {
          setUsuarios(resp.data.data);
         // ficRefPage.current++;
        } else {
          alert("No hay mas registros");
        }
      })
      .catch((err) => console.log(err));
  };
  return {
    usuarios,
    //para no exponer la funcion
    //ficFnCargaUsuarios
    ficFnPaginaAnterior,
    ficFnPaginaSiguiente,
  };
};
