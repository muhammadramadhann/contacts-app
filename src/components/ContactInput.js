import React from 'react';

class ContactInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi stat
        this.state = {
            name: '',
            tag: '',
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                name: event.target.value,
            }
        });
    }

    onTagChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                tag: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {

        event.preventDefault();

        // validation
        if (!this.state.name || !this.state.tag) {
            alert('Semua field input harus diisi!');
            return;
        }

        // add contact
        this.props.addContact(this.state);

        // reset form input after submit
        this.setState({
            name: '',
            tag: '',
        });
    }

    render() {
        return (
            <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
                <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler} />
                <button type="submit">Tambah</button>
            </form>
        );
    }
}

export default ContactInput;