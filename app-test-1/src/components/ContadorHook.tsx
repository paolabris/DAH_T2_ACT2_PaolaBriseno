
import { useCounter } from './hooks/useCounter'

export const ContadorHook = () => {
  /*   const [valor,setValor]=useState(0);
    const acumular =(numero:number)=>{
        setValor(valor+numero);
    } */
    const {valor, acumular} = useCounter(100);

    return (
        <div>
            <h3>Contador Hook: <small>{valor}</small></h3>
            <button className="Boton1"
            onClick={()=>acumular(1)}
            >Sumar (+1)</button>
            &nbsp;
            <button className="Boton2"
            onClick={()=>acumular(-1)}
            >Restar (-1)</button>
        </div>
    )
}