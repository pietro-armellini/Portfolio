const Contact = () => {
  const email = "contact@pietroarmellini.com";
  const subject = "Inquiry from Portfolio";
  const body = "Hello Pietro, I would like to get in touch regarding...";

  return (
    <section
      id="contact"
      className="my-24 flex flex-col items-center text-center px-4"
    >
      <h1 className="text-center text-5xl text-primary font-semibold">
        Contact me
      </h1>
      <p className="py-10 md:w-4/5 mx-auto sm:text-xl">
        I’m currently looking for software engineering opportunities — feel
        free to reach out if you think I’d be a good fit for your team or
        project.
      </p>

      <a
        href={`mailto:${email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`}
      >
        <button className="px-6 py-3 rounded-2xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
          Email Me
        </button>
      </a>
    </section>
  );
};

export default Contact;
