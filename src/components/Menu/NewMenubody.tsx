import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormSubtract } from 'react-icons/gr';
import {addToCart} from '../../redux/actions/cart.actions';
import { useDispatch, useSelector,  } from 'react-redux';
import {
  
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import { AppProps, AppState, Product } from '../../types';

export default function NewMenubody({ product }: AppProps) {
  // const products = useSelector((state: AppState) => state.productsDataReducer);
  const cartItems = useSelector((state: AppState) => state.handlerCartDataReducer)
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  const addHandler = (product: Product) => {
    setValue(value + 1);
    dispatch(addToCart(product))
  };
  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])
  const subtractionHandler = () => {
    if (value <= 0) {
      return value === 0;
    }
    setValue(value - 1);
  };

  return (
    <>
      <div id="Menu" style={{ maxWidth: '540px' }}>
        <MDBRow className="g-0">
          <MDBCol sm="5" md="7">
            <MDBCardImage
              style={{ width: '100%' }}
              src={product?.img}
              alt="pizza"
              fluid
            />
          </MDBCol>
          <MDBCol size="6" md="4">
            <MDBCardTitle>{product?.name}</MDBCardTitle>
            <small className="text-muted">{product?.description}</small>
            <MDBCardText>{`$${product?.price}`}</MDBCardText>
            <div className="d-flex justify-content-xxl-evenly align-items-center">
              <AiOutlinePlus onClick={() => addHandler(product as Product)}></AiOutlinePlus>
              <span
                style={{
                  textAlign: 'center',
                  backgroundColor: '#E1DFDF',
                  padding: '1px',
                  width: '20px',
                  borderRadius: '6px',
                }}
              >
                {value}
              </span>
              <GrFormSubtract onClick={subtractionHandler}></GrFormSubtract>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}
