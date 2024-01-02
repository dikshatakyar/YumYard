const Contact = () => {
  return (
    <div className="flex m-4 flex-col justify-between items-center ">
      <h1 className="text-4xl font-bold">Contact Us</h1>

      <form className="m-4 flex justify-center items-center flex-col">
        <div className="flex flex-col">
          <label className="m-4">
            Name :
            <input
              type="text"
              className="border-black border-2 ml-4 rounded-md"
            />
          </label>
          <label>
            Message :
            <input
              type="text"
              className="border-black border-2 ml-4 rounded-md"
            />
          </label>
        </div>
        <div>
          <button className="border-black rounded-lg border-2 m-8 px-3">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
