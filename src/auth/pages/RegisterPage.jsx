import { useNavigate } from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';

import { AuthContext } from "../context/AuthContext";
import { postUser } from "../helpers";
import { useForm } from "../../hooks/useForm";
import Logo from '../../assets/logo.svg';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css';

export const RegisterPage = () => {

    //   const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        nombre,
        apellido,
        fecha_nacimiento,
        genero,
        email,
        passwor,
        onInputChange
    } = useForm({
        email: '',
        passwor: '',
        nombre: '',
        apellido: '',
        fecha_nacimiento: '',
        genero: '',
    });

    const notifySuccess = (message) => toast.success(message);
    const notifyError = (message) => toast.error(message);

    const onRegisterSubmit = async (event) => {
        event.preventDefault();

        // console.log({ nombre, apellido, fecha_nacimiento, genero, email, passwor });
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(passwor)) {
            notifyError('La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula y un número.');
            return;
        }

        const dataUser = {
            nombre,
            apellido,
            fecha_nacimiento,
            genero,
            email,
            passwor,
            "id_rol": 2
        }

        const respuesta = await postUser(dataUser);
        if (respuesta.exito) {
            notifySuccess(respuesta.message);
        } else if (!respuesta.exito && !respuesta.e) {
            notifyError(respuesta.message);
        } else {
            notifyError("Error interno en el servidor");
        }

    }

    const onLogin = () => {
        navigate('/login', {
          replace: false
        });
    }

    return (
        <>
            <section className="background-radial-gradient overflow-hidden">
                <div className="container px-4 pt-5 px-md-5 text-center text-lg-start">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0 animate__animated animate__fadeIn" style={{ zIndex: 10 }}>
                            <img 
                                src={Logo} alt="Bootstrap" width="45" height="39" />
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: '#17202A' }}>
                                La mejor plataforma <br />
                                <span style={{ color: '#2C3E50' }}>para ver tus peliculas</span>
                            </h1>
                            <p className="mb-4 opacity-70" style={{ color: '#2C3E50' }}>
                                ¡Bienvenido a <b>PeliFlix!</b>

                                Estamos encantados de que te unas a nuestra comunidad de amantes del cine.
                                Para poder alquilar y comentar nuestras películas, primero debes registrarte.
                            </p>
                        </div>

                        <div className="col-lg-6 position-relative">
                            <div id="radius-shape-1" className="animate__animated animate__fadeIn position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="animate__animated animate__fadeIn position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-4 px-md-5">
                                    <form onSubmit={onRegisterSubmit}>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div data-mdb-input-init className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="nombre"
                                                        value={nombre}
                                                        onChange={onInputChange}
                                                    />
                                                    <label className="form-label">Nombre</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div data-mdb-input-init className="form-outline">
                                                    <input
                                                        type="text"
                                                        name="apellido"
                                                        value={apellido}
                                                        onChange={onInputChange}
                                                        className="form-control"
                                                    />
                                                    <label className="form-label">Apellido</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div data-mdb-input-init className="form-outline">
                                                    <input
                                                        className="form-control"
                                                        type="date"
                                                        name="fecha_nacimiento"
                                                        value={fecha_nacimiento}
                                                        onChange={onInputChange}
                                                    />
                                                    <label className="form-label">Fecha de cumpleaños</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div data-mdb-input-init className="form-outline">
                                                    <select
                                                        className="form-select"
                                                        name="genero"
                                                        value={genero}
                                                        onChange={onInputChange}
                                                    >
                                                        <option value="">Selecciona tu género</option>
                                                        <option value="masculino">Masculino</option>
                                                        <option value="femenino">Femenino</option>
                                                    </select>
                                                    <label className="form-label">Género</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={onInputChange}
                                                className="form-control"
                                            />
                                            <label className="form-label">Correo</label>
                                        </div>

                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input
                                                type="password"
                                                name="passwor"
                                                value={passwor}
                                                onChange={onInputChange}
                                                className="form-control"
                                            />
                                            <label className="form-label">Contraseña</label>
                                        </div>

                                        <button
                                            className="btn btn-primary btn-block mb-4">
                                            Registrarse
                                        </button>

                                        <div className="text-center">
                                            <p style={{color: '#ECF0F1'}}>¿Ya tienes una cuenta? <a onClick={onLogin}
                                                className="link-two">Ingresa aquí</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                pauseOnHover
                theme="colored"
            />
        </>
    )
}
