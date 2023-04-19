import React, { useMemo } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import SplitButton from "react-bootstrap/SplitButton";
import Dropdown from "react-bootstrap/Dropdown";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FormCheckType } from "react-bootstrap/esm/FormCheck";
import { FormCheckInputProps } from "react-bootstrap/esm/FormCheckInput";
import Feedback from "react-bootstrap/Feedback";
import * as yup from "yup";
import { Formik } from "formik";

export default {
  component: Form,
  subcomponents: {
    FormGroup: Form.Group,
    FormLabel: Form.Label,
    FormControl: Form.Control,
    FormText: Form.Text,
    FromCheck: Form.Check,
    InputGroup,
    FloatingLabel,
    FormFloating: Form.Floating,
    Feedback,
  },
} as ComponentMeta<typeof Form>;

export const Overview = () => (
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);

export const TextControlExample = () => (
  <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
  </Form>
);

export const PlaintextExample = () => (
  <Form>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Email
      </Form.Label>
      <Col sm="10">
        <Form.Control plaintext readOnly defaultValue="email@example.com" />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        Password
      </Form.Label>
      <Col sm="10">
        <Form.Control type="password" placeholder="Password" />
      </Col>
    </Form.Group>
  </Form>
);

export const FormFileExample = () => (
  <>
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Label>Default file input example</Form.Label>
      <Form.Control type="file" />
    </Form.Group>
    <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Multiple files input example</Form.Label>
      <Form.Control type="file" multiple />
    </Form.Group>
    <Form.Group controlId="formFileDisabled" className="mb-3">
      <Form.Label>Disabled file input example</Form.Label>
      <Form.Control type="file" disabled />
    </Form.Group>
    <Form.Group controlId="formFileSm" className="mb-3">
      <Form.Label>Small file input example</Form.Label>
      <Form.Control type="file" size="sm" />
    </Form.Group>
    <Form.Group controlId="formFileLg" className="mb-3">
      <Form.Label>Large file input example</Form.Label>
      <Form.Control type="file" size="lg" />
    </Form.Group>
  </>
);

export const ColorPickerExample = () => (
  <>
    <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
    <Form.Control
      type="color"
      id="exampleColorInput"
      defaultValue="#563d7c"
      title="Choose your color"
    />
  </>
);

export const SelectExample = () => (
  <Form.Select aria-label="Default select example">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Select>
);

export const CheckExample = () => (
  <Form>
    {(["checkbox", "radio"] as FormCheckType[]).map((type) => (
      <div key={`default-${type}`} className="mb-3">
        <Form.Check
          type={type}
          id={`default-${type}`}
          label={`default ${type}`}
        />

        <Form.Check
          disabled
          type={type}
          label={`disabled ${type}`}
          id={`disabled-default-${type}`}
        />
      </div>
    ))}
  </Form>
);

export const SwitchExample = () => (
  <Form>
    <Form.Check type="switch" id="custom-switch" label="Check this switch" />
    <Form.Check
      disabled
      type="switch"
      label="disabled switch"
      id="disabled-custom-switch"
    />
  </Form>
);

export const CheckInlineExample = () => (
  <Form>
    {(["checkbox", "radio"] as FormCheckType[]).map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check
          inline
          label="1"
          name="group1"
          type={type}
          id={`inline-${type}-1`}
        />
        <Form.Check
          inline
          label="2"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
        />
        <Form.Check
          inline
          disabled
          label="3 (disabled)"
          type={type}
          id={`inline-${type}-3`}
        />
      </div>
    ))}
  </Form>
);

export const CustomizingCheckExample = () => (
  <Form>
    {(["checkbox", "radio"] as FormCheckType[]).map((type) => (
      <div key={type} className="mb-3">
        <Form.Check type={type} id={`check-api-${type}`}>
          <Form.Check.Input
            type={type as FormCheckInputProps["type"]}
            isValid
          />
          <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
          <Form.Control.Feedback type="valid">
            You did it!
          </Form.Control.Feedback>
        </Form.Check>
      </div>
    ))}
  </Form>
);

export const RangeExample = () => (
  <>
    <Form.Label>Range</Form.Label>
    <Form.Range />
  </>
);

export const InputGroupExample = () => (
  <>
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
      <Form.Control
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </InputGroup>

    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
    </InputGroup>

    <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon3">
        https://example.com/users/
      </InputGroup.Text>
      <Form.Control id="basic-url" aria-describedby="basic-addon3" />
    </InputGroup>

    <InputGroup className="mb-3">
      <InputGroup.Text>$</InputGroup.Text>
      <Form.Control aria-label="Amount (to the nearest dollar)" />
      <InputGroup.Text>.00</InputGroup.Text>
    </InputGroup>

    <InputGroup>
      <InputGroup.Text>With textarea</InputGroup.Text>
      <Form.Control as="textarea" aria-label="With textarea" />
    </InputGroup>
  </>
);

export const SplitButtonExample = () => (
  <>
    <InputGroup className="mb-3">
      <SplitButton
        variant="outline-secondary"
        title="Action"
        id="segmented-button-dropdown-1"
      >
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
      </SplitButton>
      <Form.Control aria-label="Text input with dropdown button" />
    </InputGroup>

    <InputGroup className="mb-3">
      <Form.Control aria-label="Text input with dropdown button" />
      <SplitButton
        variant="outline-secondary"
        title="Action"
        id="segmented-button-dropdown-2"
      >
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
      </SplitButton>
    </InputGroup>
  </>
);
export const FormFloatingBasicExample = () => (
  <>
    <FloatingLabel
      controlId="floatingInput"
      label="Email address"
      className="mb-3"
    >
      <Form.Control type="email" placeholder="name@example.com" />
    </FloatingLabel>
    <FloatingLabel controlId="floatingPassword" label="Password">
      <Form.Control type="password" placeholder="Password" />
    </FloatingLabel>
  </>
);

export const FormFloatingCustom = () => (
  <>
    <Form.Floating className="mb-3">
      <Form.Control
        id="floatingInputCustom"
        type="email"
        placeholder="name@example.com"
      />
      <label htmlFor="floatingInputCustom">Email address</label>
    </Form.Floating>
    <Form.Floating>
      <Form.Control
        id="floatingPasswordCustom"
        type="password"
        placeholder="Password"
      />
      <label htmlFor="floatingPasswordCustom">Password</label>
    </Form.Floating>
  </>
);

export const ValidationExample = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "Mark",
        lastName: "Otto",
        username: "",
        city: "",
        state: "",
        zip: "",
        terms: false,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
};

export const SimpleValidationExample = () => (
  <InputGroup hasValidation>
    <InputGroup.Text>@</InputGroup.Text>
    <Form.Control type="text" required isInvalid />
    <Form.Control.Feedback type="invalid">
      Please choose a username.
    </Form.Control.Feedback>
  </InputGroup>
);
