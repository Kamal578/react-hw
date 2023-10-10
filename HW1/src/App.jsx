import { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Modal from "./components/Modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      data: {},
    };
  }

  data = [
    {
      id: "1",
      header: "Do you want to delete this file?",
      closeButton: true,
      text: "Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?",
      actions: (
        <>
          <Button backgroundColor="red" textColor="white" text="Ok" />
          <Button backgroundColor="red" textColor="white" text="Cancel" />
        </>
      ),
    },
    {
      id: "2",
      header: "Lorem Ipsum?",
      closeButton: true,
      text: "Dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien aliquet urna, vitae aliquam nun",
      actions: (
        <>
          <Button backgroundColor="red" textColor="white" text="yeah" />
          <Button backgroundColor="red" textColor="white" text="nope" />
        </>
      ),
    },
  ];

  handleOpenModal = (modalId) => {
    const currentModal = this.data.find((modal) => modal.id === modalId);
    if (currentModal) {
      this.setState({ isOpen: true, data: currentModal });
    }
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false, data: {} });
  };

  render() {
    return (
      <div className="App flex flex-col items-center justify-center h-screen">
        <Button
          backgroundColor="white"
          textColor="black"
          text="Open the 1st modal"
          dataModal="1"
          onClick={(e) => this.handleOpenModal(e.target.dataset.modal)}
        />
        <Button 
          backgroundColor="white"
          textColor="black"
          text="Open the 2nd modal"
          dataModal="2"
          onClick={(e) => this.handleOpenModal(e.target.dataset.modal)}
        />

        {this.state.isOpen && (
          <Modal data={this.state.data} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default App;
