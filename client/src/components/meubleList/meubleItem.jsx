import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const customStyles = {
    content : {
      top                   : '30%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : "30%"
    }
  };
const MeubleItem = ({element , indice})=>{
var subtitle;
const [modalIsOpen,setIsOpen] = React.useState(false);
function openModal() {
  setIsOpen(true);
}

function afterOpenModal() {
  // references are now sync'd and can be accessed.
  subtitle.style.color = '#f00';
}

function closeModal(){
  setIsOpen(false);
}
    return(
        <div className="card">
            <img class="card-img-top" src={element.link} alt={element.name}/>
            <div class="card-body">
                <h5 class="card-title"> {element.name}</h5>
                <p class="card-text"><b>Prix : </b> {element.price}</p>
                <p class="card-text"><b>Couleur : </b> {element.color}</p>
                <p class="card-text"> <b>Disponibe : </b> 5/120</p>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <Link to={"/ajouter/"+element.id} className="btn btn-info bg-info">
                    Modifier
                </Link>
                <button className="btn btn-danger bg-danger"  onClick={openModal}>
                    Supprimer
                </button>
            </div>
            <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="text-center">
            <h2 ref={_subtitle => (subtitle = _subtitle)}>Êtes-vous sûr</h2>
        </div>
        <hr/>
          <div className="d-flex justify-content-around mt-5">
              <button className="btn btn-success bg-success"  onClick={closeModal}>Confirmer</button>
              <button className="btn btn-danger bg-danger" onClick={closeModal}>Annuler</button>
          </div>
        </Modal>
        </div>
    )
}

export default MeubleItem;