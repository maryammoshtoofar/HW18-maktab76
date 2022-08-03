import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import AnimatedTransitions from "../../Components/AnimatedTransitions";
import { Form, Input, Textarea, Button, Message } from "./styled";

const ContactUs = () => {
  const submitMessage = document.getElementById(
    "submitMessage"
  ) as HTMLDivElement;

  const [userData, setUserData] = useState({
    name: "",
    familyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState({
    fName: "مریم",
    lName: "مشتوفر",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const { name, familyName, email, phone, message } = userData;

  const FormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage({ fName: name, lName: familyName });
    submitMessage.style.display = "block";
  };

  const isValid =
    name !== "" &&
    familyName !== "" &&
    email !== "" &&
    phone !== "" &&
    message !== "";

  return (
    <AnimatedTransitions>
      <Form onSubmit={(e) => FormSubmit(e)}>
        <Input
          value={name}
          type="text"
          name="name"
          placeholder="نام"
          onChange={(e) => handleChange(e)}
        />
        <Input
          value={familyName}
          type="text"
          name="familyName"
          placeholder="نام خانوادگی"
          onChange={(e) => handleChange(e)}
        />
        <Input
          value={email}
          type="email"
          name="email"
          placeholder="ایمیل"
          onChange={(e) => handleChange(e)}
        />
        <Input
          value={phone}
          type="text"
          name="phone"
          placeholder="شماره تماس"
          onChange={(e) => handleChange(e)}
        />
        <Textarea
          value={message}
          name="message"
          placeholder="پیغام خود را اینجا بنوبیسید"
          onChange={(e) => handleChange(e)}
        />
        <Button type="submit" disabled={!isValid}>
          ارسال پیام
        </Button>
      </Form>
      <Message id="submitMessage">
        {`${successMessage.fName} ${successMessage.lName} !عزیز، پیام شما ثبت شد`}
      </Message>
    </AnimatedTransitions>
  );
};

export default ContactUs;
