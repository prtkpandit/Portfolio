import React from 'react';

const Introduction = () => {
    return (
        <div className="jumbotron jumbotron-fluid" id="about" >
            <p style={{ width: "80%", margin: "auto" }} className="text-center"  >
                My name is Prateek Upadhyay and I'm a software developer, with decent practical experience and knowledge in building webpages and programs; and I'm very passionate about computer science.
            </p>
            <div className="container">
                <hr width="80%"></hr>
                <img className="img-fluid  mx-auto d-block" src="https://lh3.googleusercontent.com/pw/ACtC-3diDjA5av8XlyHtnZx5mcbfk8sPx8zLURkPMLunZRwe5VKzq2B8zqCD0ZSkUbPL2UHqviiNiS1YOEMXaBTOnj9sT2jl02mKvb7IUJXx87aOd2CcMD6fPkKYwBfrZ782qwkfQOnaS8tqBkHYbepIdBdldw=w660-h990-no" id="dp" alt="Display Pic"></img><br />
                <div className="text-center" id="AroundTheWeb">
                    <a href="https://www.linkedin.com/in/prateek-upadhyay-34b49117a/" className="btn btn-dark btn-lg " id="but" title="LinkedIn" >
                        <i className="fab fa-linkedin-in" id="ico" ></i>
                    </a>
                    <a href="https://www.facebook.com/Awsmmpratk/" className="btn btn-dark btn-lg" id="but" title="Facebook">
                        <i className="fab fa-facebook-f" id="ico" ></i>
                    </a>
                    <a href="https://github.com/prtkpandit" className="btn btn-dark btn-lg" id="but" title="Github">
                        <i className="fab fa-github-alt" id="ico" ></i>
                    </a>
                    <a href="https://instagram.com/prtk_pandit" className="btn btn-dark btn-lg" id="but" title="Instagran">
                        <i className="fab fa-instagram" id="ico" ></i>
                    </a>
                    <a href="https://docs.google.com/document/d/1cO6LnB3W05CAYG0MU9C5V6GzO7q8Lz2pPk0jowydyf4/edit" className="btn btn-dark btn-lg" id="but" title="Resume">
                        <i className="fas fa-file-alt" id="ico" ></i>
                    </a>
                    <h1></h1>
                    <h1>SKILLS</h1>
                    <h2>Web Devlopment</h2>
                    <h2>Competitive programming</h2>
                    <h2>Backend Devlopment</h2>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
