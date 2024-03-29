import React, { Component } from "react";
import imgsalary from "../imgs/salary-it.png";
import { NavLink, Link } from "react-router-dom";
import employeeimg from "../imgs/flatdesign-employees.jpg";
import moneydownimg from "../imgs/moneydown.jpg";
import tipos_de_ingresosimg from "../imgs/tipos_de_ingresos.jpeg";
import moneytransact from "../imgs/moneytran01.jpg";
import accounting01 from "../imgs/Accounting01.jpg";


export class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1">
                Bienvenido/a al sistema de gesti&oacute;n de nominas
              </h1>
              <p className="lead">
                Dise&ntilde;e y agregue registros de empleados, departamentos,
                ingresos y deducciones para generacion de transacciones para
                contabilidad.
                        </p>
                        <br />

              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <a
                  href="#comienzoGestionHome"
                  className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Comenzar Gesti&oacute;n
                </a>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                className="rounded"
                src={imgsalary}
                alt="Salario IT"
                width="720"
              ></img>
            </div>
          </div>
        </div>

        <div className="container px-4 py-5" id="comienzoGestionHome">
          <h2 className="pb-2 border-bottom">
            M&oacute;dulos de Gesti&oacute;n de N&oacute;minas
          </h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col">
                        <div className="card">
                            <img src={employeeimg} className="card-img-top" alt="Grupo de Empleados"></img>
                            <div className="card-body">
                                <h5 className="card-title">Empleados</h5>
                                <p className="card-text">
                                    M&oacute;dulo de gesti&oacute;n de empleados
                                    dominados por el sistema de nomina.
                                </p>
                                <br/>
                                <Link to="/empleados" className="btn btn-warning fw-bold"> Acceder a Empleados</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={tipos_de_ingresosimg} className="card-img-top" alt="Grafico dinero ascendente"></img>
                            <div className="card-body">
                                <h5 className="card-title">Gestión de Ingresos</h5>
                                <p className="card-text">M&oacute;dulo de gesti&oacute;n de Tipos de ingresos destinado al
                                registro de las diferentes ganancias por parte de los empleados.</p>
                                <br/>
                                <NavLink
                                    className="btn btn-warning fw-bold"
                                    to="/ingresos"
                                >
                                    Acceder a Ingresos
                                </NavLink>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={moneydownimg} className="card-img-top" alt="Grafico dinero descendente"></img>
                            <div className="card-body">
                                <h5 className="card-title">Tipos de Deducciones</h5>
                                <p className="card-text">
                                    M&oacute;dulo de gesti&oacute;n de tipos de deducciones
                                    aplicables a salarios de empleados. Identifica el tipo de
                                    transaccion en el modulo respectivo.
                                </p>
                                <br />
                                <NavLink
                                    className="btn btn-warning fw-bold"
                                    to="/gestiondeducciones"
                                >
                                    Acceder a Deducciones
                                </NavLink>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={moneytransact} className="card-img-top" alt="Transacciones dinero"></img>
                            <div className="card-body">
                                <h5 className="card-title">Transacciones</h5>
                                <p className="card-text">
                                    Modulo de gestion de transacciones de nominas para su registro postumo en contabilidad.
                                </p>
                                    <br />
                                    <NavLink
                                        className="btn btn-warning fw-bold"
                                        to="/transacciones"
                                    >
                                        Acceder a Transacciones
                                    </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={accounting01} className="card-img-top" alt="Contabilidad dinero"></img>
                            <div className="card-body">
                                <h5 className="card-title">Contabilizaci&oacute;n</h5>
                                <p className="card-text">
                                    Modulo de contabilizaci&oacute;n de transacciones registradas.
                                </p>
                                <br />
                                <NavLink
                                    className="btn btn-warning fw-bold"
                                    to="/asientos"
                                >
                                    Acceder a Contabilizaci&oacute;n
                                </NavLink>
                            </div>
                        </div>
                    </div>
          </div>
        </div>
      </div>
    );
  }
}
