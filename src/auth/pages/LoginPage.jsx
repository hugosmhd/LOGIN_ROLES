import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

import { ToastContainer, toast } from 'react-toastify';

import { useForm } from "../../hooks/useForm";
import { postLogin } from "../helpers";
import Logo from '../../assets/logo.svg';

import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const { correo, password, onInputChange } = useForm({
    correo: '',
    password: '',
  });


  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const onLogin = async () => {

    const dataLogin = {
      email: correo,
      password,
    }

    // const respuesta = await postLogin(dataLogin);
    // console.log(respuesta);
    // if (!respuesta) {
    //   notifyError("Usuario y/o contraseña son incorrectas.");
    // } else {
    //   const nombreCompleto = `${respuesta.nombre} ${respuesta.apellido}`
    //   notifySuccess(`Bienvenido de vuelta ${nombreCompleto}`);
    //   const lastPath = localStorage.getItem('lastPath') || '/';
    //   login(nombreCompleto, respuesta.id_rol, respuesta.id_usuario);
    //   // navigate(lastPath, {
    //   //   replace: true
    //   // });
    // }

    // console.log(correo, password);

    // const lastPath = localStorage.getItem('lastPath') || '/';

    login('Sebastian Martínez', 1, 1);

    // navigate(lastPath, {
    //   replace: true
    // });

  }

  const onRegister = () => {

    console.log('Registar');

    navigate('/register', {
      replace: false
    });

  }

  return (
    <>
      <section style={{  }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: '1rem'}} >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://i.pinimg.com/736x/07/84/d3/0784d34a59a84326eb30dc14d05f5db1.jpg"
                      alt="login form" className="img-fluid animate__animated animate__fadeIn" style={{borderRadius: '1rem 0 0 1rem'}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center bg-300" style={{ borderRadius: '0 1rem 1rem 0' }}>
                    <div className="card-body p-4 p-lg-5 text-black" style={{borderRadius: '1rem'}} >
                      <form>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <img src={Logo} alt="Bootstrap" width="30" height="24" />
                          <span className="h1 fw-bold mb-0">PeliFlix</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3">Iniciar sesión en su cuenta</h5>

                        <div data-mdb-input-init className="form-outline mb-3">
                          <input 
                            type="email"
                            name="correo"
                            value={correo}
                            onChange={onInputChange}
                            className="form-control form-control-lg" 
                          />
                          <label className="form-label">Correo Electrónico</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-3">
                          <input 
                            type="password" 
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            className="form-control form-control-lg" 
                          />
                          <label className="form-label">Password</label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button 
                            data-mdb-button-init data-mdb-ripple-init 
                            className="btn btn-dark btn-lg btn-block" 
                            type="button"
                            onClick={onLogin}
                          >Login
                          </button>
                        </div>

                        <p className="mb-2 pb-lg-2" style={{color: '#393f81'}}>¿No tienes una cuenta? <a onClick={onRegister}
                            style={{color: '#393f81'}} className="link">Registrar aquí</a></p>
                      </form>

                    </div>
                  </div>
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
