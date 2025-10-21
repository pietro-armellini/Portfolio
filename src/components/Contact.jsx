const Contact = () => {
  const email = "contact@pietroarmellini.com";
  const subject = "Inquiry from Portfolio";
  const body = "Hello, I would like to get in touch regarding..."; // Replace with your email

  return (
    <div className="text-center my-20" id="contact">
      <h1 className="text-4xl font-bold mb-10 text-primary">Lets Get In Touch!</h1>

      <a
        href={`mailto:${email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`}
      >
        {" "}
        <button className="btn btn-outline">Email Me!</button>
      
      </a>
    </div>
  );
};

export default Contact;
