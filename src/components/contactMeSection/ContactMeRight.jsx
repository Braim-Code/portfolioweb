import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="public/images/email-image.png" // Correct path for public folder in Vite
        alt="email image"
        className="max-w-[300px]"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
