import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormSubtract } from 'react-icons/gr';
import { AiOutlineDelete } from 'react-icons/ai';
import {
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, Product } from '../../types';
import { useEffect } from 'react';
import {
  addToCart,
  decrementQty,
  removeFromCart,
} from '../../redux/actions/cart.actions';

const CartProductBody = ({ product }: any) => {
  const daletedItem = useSelector(
    (state: AppState) => state.handlerCartDataReducer,
  );
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(removeFromCart(product));
  };

  const addHandler = () => {
    // here im getting the specific item by id  TO (addToCart.actions && addToCart.reducer)
    dispatch(addToCart(product as Product));
  };

  const subtractionHandler = () => {
    dispatch(decrementQty(product as Product));
  };

  let totalPrice = +product.price * product.quantity;

  useEffect(() => {
    console.log(daletedItem);
  }, [daletedItem]);
  return (
    <MDBRow className="mb-3">
      <div className="md-8">
        <MDBRow className="g-0">
          <MDBCol sm="5" md="7">
            <MDBCardImage
              style={{ width: '100%' }}
              src={product.img}
              alt="pizza"
              fluid
            />
          </MDBCol>
          <MDBCol size="6" md="4">
            <MDBCardTitle>{product.name}</MDBCardTitle>
            <MDBCardText>{product.description}</MDBCardText>
            <MDBCardText>
              <small className="text-muted"> ${totalPrice} </small>
            </MDBCardText>
            <div className="d-flex justify-content-xxl-evenly align-items-center">
              <AiOutlinePlus onClick={addHandler}></AiOutlinePlus>
              <span
                style={{
                  textAlign: 'center',
                  backgroundColor: '#E1DFDF',
                  padding: '1px',
                  width: '20px',
                  borderRadius: '6px',
                }}
              >
                {product.quantity}
              </span>
              <GrFormSubtract onClick={subtractionHandler}></GrFormSubtract>
              <AiOutlineDelete onClick={deleteHandler}></AiOutlineDelete>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBRow>
  );
};

export default CartProductBody;
