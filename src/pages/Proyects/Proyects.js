import React from "react";
import Proyect from "../../components/Proyect/Proyect";
import "./Proyects.css"
import imgProfile from "../../images/imgProfile.png"
import ProyectSection from "../../components/ProyectSection/ProyectSection";

const Proyects = () => {
    return(
        <div className="proyectsContainer">
            <ProyectSection title={'Personales'}>
                <Proyect 
                    imgProyect={imgProfile}
                    nameProyect={'Proyecto 1'}
                    littleDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                />
                <Proyect 
                    imgProyect={imgProfile}
                    nameProyect={'Proyecto 2'}
                    littleDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                />
                <Proyect 
                    imgProyect={imgProfile}
                    nameProyect={'Proyecto 3'}
                    littleDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                />
                <Proyect 
                    imgProyect={imgProfile}
                    nameProyect={'Proyecto 4'}
                    littleDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                />
                <Proyect 
                    imgProyect={imgProfile}
                    nameProyect={'Proyecto 5'}
                    littleDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                />
            </ProyectSection>

            <ProyectSection title={'Trabajo'}>
            <Proyect 
                    imgProyect={imgProfile}
                    nameProyect={'Proyecto 1'}
                    littleDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                />
                <Proyect 
                    imgProyect={imgProfile}
                    nameProyect={'Proyecto 2'}
                    littleDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                />
                <Proyect 
                    imgProyect={imgProfile}
                    nameProyect={'Proyecto 3'}
                    littleDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                />
                <Proyect 
                    imgProyect={imgProfile}
                    nameProyect={'Proyecto 4'}
                    littleDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                />
                <Proyect 
                    imgProyect={imgProfile}
                    nameProyect={'Proyecto 5'}
                    littleDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                />
            </ProyectSection>
            
        </div>
    )
}

export default Proyects