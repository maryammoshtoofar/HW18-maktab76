import { useState } from "react";
import AnimatedTransitions from "../../Components/AnimatedTransitions";
import { Form, Input, Textarea } from "./styled";

const ContactUs = () => {
  const [userData, setUserData] = useState({
    name: "",
    familyName: "",
    email: "",
    phone: "",
    message: "",
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

  const isValid =
    name !== "" &&
    familyName !== "" &&
    email !== "" &&
    phone !== "" &&
    message !== "";

  return (
    <AnimatedTransitions>
      <Form>
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
        <button type="submit" disabled={!isValid}>
          ارسال پیام
        </button>
      </Form>
    </AnimatedTransitions>
  );
};

export default ContactUs;
