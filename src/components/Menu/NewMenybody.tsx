import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormSubtract } from 'react-icons/gr';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

export default function NewMenubody({ item }: any) {
  const [value, setValue] = useState(0);

  const addHandler = () => {
    setValue(value + 1);
  };

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
              src={item.img}
              alt="pizza"
              fluid
            />
          </MDBCol>
          <MDBCol size="6" md="4">
            <MDBCardTitle>{item.name}</MDBCardTitle>
            <MDBCardText>{item.details}</MDBCardText>
            <MDBCardText>
              <small className="text-muted">{`$ ${item.price}`}</small>
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
