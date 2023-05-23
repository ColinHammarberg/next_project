import React, { PureComponent } from 'react';
import ReactDOM, { render } from 'react-dom';
import CustomButton from '../Buttons/CustomButton';
import { Dialog, DialogContent } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import './ConfirmOrder.scss';

let resolve;
let containerElement;

class ConfirmOrder extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleHistoryStateChanged = this.handleHistoryStateChanged.bind(this);
  }

  componentDidMount() {
    window.addEventListener('popstate', this.handleHistoryStateChanged);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount ConfirmOrder');
    window.removeEventListener('popstate', this.handleHistoryStateChanged);
    resolve = null;
    containerElement = null;
  }

  static destroy(retVal = false) {
    if (containerElement) {
      ReactDOM.unmountComponentAtNode(containerElement);
      document.body.removeChild(containerElement);
    }
    if (resolve) resolve(retVal);
  }

  static show() {
    containerElement = document.createElement('div');
    document.body.appendChild(containerElement);
    render(
      <ThemeProvider>
        <ConfirmOrder />
      </ThemeProvider>,
      containerElement
    );
    return new Promise((res) => {
      resolve = res;
    });
  }

  handleCancel() {
    this.setState({ isOpen: false }, () => {
        ConfirmOrder.destroy({
          isConfirmed: false,
        });
    });
  }

  handleHistoryStateChanged() {
    this.setState({ isOpen: false }, () => {
        ConfirmOrder.destroy();
    });
  }

  handleConfirm() {
      this.setState({ isOpen: false }, () => {
        ConfirmOrder.destroy({
            isConfirmed: true,
          });
      });
  }

  render() {
    if (!this.state.isOpen) {
      return null;
    }
    return (
    <Dialog
      className="confirm-order"
      open
      maxWidth="sm"
    >
      <DialogContent className="dialog-content">
      <h1 className="title">Confirm Order</h1>
      <p>Are you sure that you would like to place you order?</p>
      </DialogContent>
      <div className="order-btn">
        <CustomButton
            key="cancelButton"
            onClick={this.handleCancel}
            className="cancel"
            title="Cancel"
        />
        <CustomButton
            key="confirmButton"
            onClick={this.handleConfirm}
            className="confirm"
            title="Confirm"
        />
      </div>
    </Dialog>
    );
  }
}

export default ConfirmOrder;
