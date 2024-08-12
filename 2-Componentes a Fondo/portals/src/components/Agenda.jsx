import React, { Component } from 'react'
import  ReservarHora from './ReservarHora'

export default class Agenda extends Component {

    confirm = () => {
        alert("Ok")
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Doctor Nicolás</h1>
                    <ReservarHora onClick={this.confirm} />
                    <ReservarHora onClick={this.confirm} />
                    <ReservarHora onClick={this.confirm} />
                    <ReservarHora onClick={this.confirm} />
                    <ReservarHora onClick={this.confirm} />
                    <ReservarHora onClick={this.confirm} />
                    <ReservarHora onClick={this.confirm} />
                </div>
            </div>
        )
    }
}
