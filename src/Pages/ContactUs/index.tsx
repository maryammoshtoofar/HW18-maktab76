import { useState } from "react";
import AnimatedTransitions from "../../Components/AnimatedTransitions";

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
      <form>
        <input
          value={name}
          type="text"
          name="name"
          placeholder="نام"
          onChange={(e) => handleChange(e)}
        />
        <input
          value={familyName}
          type="text"
          name="familyName"
          placeholder="نام خانوادگی"
          onChange={(e) => handleChange(e)}
        />
        <input
          value={email}
          type="email"
          name="email"
          placeholder="ایمیل"
          onChange={(e) => handleChange(e)}
        />
        <input
          value={phone}
          type="text"
          name="phone"
          placeholder="شماره تماس"
          onChange={(e) => handleChange(e)}
        />
        <textarea
          value={message}
          name="message"
          placeholder="پیغام خود را اینجا بنوبیسید"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" disabled={!isValid}>
          ارسال پیام
        </button>
      </form>
    </AnimatedTransitions>
  );
};

export default ContactUs;
