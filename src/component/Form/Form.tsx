import type { FormField } from "../../type";

const formFields: FormField[] = [
  {
    id: 1,
    type: "email",
    placeholder: "Enter Your Email",
    name: "email",
  },
];

const Form = () => {
  return (
    <section
      className=" w-full min-h-[300px] mt-12 bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/arto-suraj-X7jtnqyn54M-unsplash 1.png')",
      }}
    >
      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex gap-4 flex-col lg:flex-row items-center justify-center">

          <h2 className="max-w-xl text-white text-2xl sm:text-3xl font-semibold  text-center lg:text-left">
            Enter your email address for our mailing Promo or other interesting things
          </h2>
          <form className="flex flex-col sm:flex-row items-center gap-4">
            
            {formFields.map((field) => (
              <input
                key={field.id}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="w-full sm:w-80 py-2 px-4 border border-white bg-transparent text-white rounded-md outline-none placeholder:text-gray-300"
              />
            ))}

            <button
              type="submit"
              className="w-full sm:w-32 p-2 border border-white text-white rounded-md hover:bg-green-900 hover:text-black transition font-semibold"
            >
              Submit
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Form;