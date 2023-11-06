export const Codefomulaire = () => {
    return (
        <div className="controle_background">
          <h1 className="titre">formulaire du cv</h1>
    
          <form id="form" action="index3.html" >
          <p>
            <label className="type" >Nom  :</label><br />
            <input className="taille" type="text" id="nom" name="nom" required /><br />
          </p>
    
          <p>
            <label className="type" > prenom :</label><br />
            <input className="taille" type="text" id="prenom" name="prenom" required /><br />
          </p>
    
          <p>
            <label className="type" >Âge :</label><br />
            <input className="taille" type="number" id="age" name="age" required /><br />
          </p>
    
          <p>
            <label className="type" >Adresse :</label><br />
            <textarea id="adresse" name="adresse" className='taille-text' ></textarea><br />
          </p>
    
          <p>
            <label className="type" >Email :</label><br />
            <input className="taille" type="email" id="email" name="email" required /><br />
    
          </p>
    
          <p>
            <label className="type" >Téléphone :</label><br />
            <input className="taille" type="tel" id="telephone" name="telephone" required /><br />
          </p>
    
    
          <p>
            <label className="type">Civilité :</label><br />
            <input type="radio" id="civilite" name="civilite" value="Homme" />
            <label >Homme</label>
            <input type="radio" id="civilite" name="civilite" value="Femme" />
            <label >Femme</label><br />
          </p>
    
          <p>
            <label className="type" >Joindre une photo :</label><br />
            <input type="file" id="photo" name="photo" accept="image/*" /><br />
          </p>
    
          <p>
            <label className="type" >Diplôme et Formation :</label><br />
            <select name="diplome-formation" id="diplome-formation">
              <option value="DUT">DUT</option>
              <option value="mas">Master</option>
              <option value="ing">Ingenieurie</option>
              <option value="Doc">Doctorat</option>
            </select>
          </p>
    
          <p>
            <label className="dot">Langues :</label><br />
            <input type="checkbox" value="Francais" name="choix" /> Francais
            <input type="checkbox" value="Anglais" name="choix" /> Anglais
            <input type="checkbox" value="Autres" name="choix" /> Autres
          </p>
    
          <p>
            <label className="type" >Objectif :</label><br />
            <textarea className='taille-text' id="objectif" name="objectif" required></textarea><br />
          </p>
    
    
          <p>
            <label className="type" >Compétences Techniques :</label><br />
            <input type="radio" id="competences" name="competences" value="Java" />
            <label >Java</label>
            <input type="radio" id="competences" name="competences" value="C" />
            <label >C</label>
            <input type="radio" id="competences" name="competences" value="Python" />
            <label >Python</label><br />
          </p>
    
    
          <input type='submit' />
        </form>
        </div >
        
      );
};