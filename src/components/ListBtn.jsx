const ListBtn = (props) => {
  return (
    <>
      <button className="rounded-md bg-fuchsia-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600">
        {props.btnContent}
      </button>
    </>
  );
};

export default ListBtn;
