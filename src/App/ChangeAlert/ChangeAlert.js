import {WithStorageListener} from "./WithStorageListener";
import './ChargeButton.css'

function ChangeAlert({show, toggleShow}) {
    if(show){
        return (
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-content'>
                    <p >Hubo cambios en otra ventana de la app </p>
                    <p >Quieres Actualizar?</p>
                    <button
                        onClick={()=>toggleShow(false)}>
                       Yes
                    </button>
                </div>
            </div>
        )
    }else{
        return null
    }

}

const ChangeAlertStorageListener= WithStorageListener(ChangeAlert);

export { ChangeAlertStorageListener };