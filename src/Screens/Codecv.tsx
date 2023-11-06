
import { BsFacebook, BsInstagram, BsTelephoneFill, BsFillBarChartFill } from "react-icons/bs";
import { GrLocation, GrPan } from "react-icons/gr";
import { HiAcademicCap} from "react-icons/hi";
import { ImPlay3 } from "react-icons/im";

export const Codecv = () => {
    return (
    <div className="body">
        <div className="division">
            <div>
                <header className='flex'>
                    <img className="image" src="https://www.raffertypendery.com/wp-content/uploads/2017/08/Tech-Entrepreneur.jpg" alt="photo de profil" /><br />
                    <section>
                        <h1 className="prenom" style={{color: "white"}}>Abderrazak</h1>
                        <h1 className="nom" style={{color: "white"}}>Rhouda</h1>
                    </section>
                </header>
                <ul className="">
                    <li><BsFacebook className="ml-5 "/> Abderrazak Ghouda</li>
                    <li><BsInstagram className="ml-2"/> Abderrazak Ghouda</li>
                    <li><BsTelephoneFill className="ml-2"/> 0635543224</li>
                    <li><GrLocation className="ml-2"/> ecole mohamadia d'ingenieur, ibn sina</li>
                </ul>
            </div>
            <div>
                <div className="">
                    <h2 className="" style={{color: "white"}}><GrPan/> Informations Personnelles:</h2>   
                </div>
                
                <h3>Nationalite: Marocaine</h3>
                <h3>Age: 20 ans</h3>
                <h3>Genre: Masculin</h3>
            </div>
            <div>
                <h2 style={{color: "white"}}><GrPan/> Interets:</h2>
                <h3>Voyages</h3>
                <h3>Musique</h3>
                <h3>Sport</h3>
                <h3>Lecture</h3>

            </div>
        </div>
        <div className="division2"  >
            <h2 className=""><HiAcademicCap/> Formations: </h2>
            <section className="bac">
                <p className="" style={{ fontSize: '25px'}}>2020-2021 <ImPlay3/></p>
                
                <main className="">
                    <h3>L'etablissement: AL MASSIRA</h3>
                    <h3>Diplome: Bacalauriat</h3>
                    <h3>Filiere: PC</h3>
                    <h3>Monsion: Tres bien</h3>
                </main>
            </section>
            <section className="prepa">
                <p style={{ fontSize: '25px'}}>2021-2023 <ImPlay3/></p>
                <main>
                    <h3>L'etablissement: CPGE Errazi</h3>
                    <h3>Diplome: Attestation d'admissibilite  aux CPGE</h3>
                    <h3>Filiere: MPSI-MP</h3>
                </main>
            </section>
            <section className="emi">
                <p style={{ fontSize: '25px'}}>2023-2026 <ImPlay3/></p>
                <main>
                    <h3>L'etablissement: Ecole Mohammadia d'Ingenieurs</h3>
                    <h3>Diplome: Ingenieur d'etat </h3>
                    <h3>Filiere: Genie informatique</h3>
                </main>
            </section>
            <div>
                <h2><BsFillBarChartFill/> Competances et langues:</h2>
                <section>
                    <h2 className="competences">Competences: </h2>
                    <ul className="liste">
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>React</li>
                    </ul>
                </section>
                <section>
                    <h2 className="langues">Langues:</h2>
                    <ul className="liste">
                        <li>Arabe</li>
                        <li>Francais</li>
                        <li>Anglais</li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
    );
};