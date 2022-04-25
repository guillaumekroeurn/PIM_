import React from 'react';
import { NavLink } from 'react-router-dom';

function envoye() {
    alert('Bien envoyé (cliquer sur ok pour avoir le formulaire dans la console)');
  }

function Form() {

    const Envoyer=(e)=>{
        e.preventDefault();
        const Ecole=e.target.ecolename.value;
        const Classe=e.target.classename.value;
        const Team=e.target.teamname.value;
        const Elèves=e.target.Elèvename.value;
        console.log("école : " +Ecole,"\n","classe : " +Classe,"\n","team : " +Team,"\n","Elèves : " +Elèves);
          
    }


    return (
    <div>  
        <div className='form'>
            <div className='headerform'>
                <div className='formtitre'>
                    <p className='principalform'>Choisissez votre team !</p>
                </div>  
            </div>
            <form onSubmit={Envoyer}>
                <div className='titreform'>
                    <p className='typecole'>Votre école</p>
                    <input  className='secform' type="text" name="ecolename" placeholder="Ecole..." id='ecole'/><br/><br/>
                </div>
                <div className='titreform'>
                    <p className='typecole'>Votre classe</p>
                    <input  className='secform' type="text" name="classename" placeholder="Classe..." id='classe'/><br/><br/>
                </div>
                <div className='titreform'>
                    <p className='typecole'>Votre team</p>
                    <input  className='secform' type="team" name="teamname" placeholder="Team..." id='team'/><br/><br/>
                </div>
                <div className='titreform'>
                    <p className='typecole'>Vos élèves</p>
                    <input  className='secform' type="text" name="Elèvename" placeholder="Elèves..." id='Incident'/><br/>
                </div>
                    <button className='boutonform' onClick={envoye} >Validez votre team</button>
            </form>
            <NavLink to="/mission" className="authPage" >
                <button className='auth-btn'> Suivant</button>
            </NavLink>
        </div>
    </div>
    );
}

// validé l'alert pour avoir le form dans console 

export default Form;